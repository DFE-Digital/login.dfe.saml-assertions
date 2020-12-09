'use strict';

const logger = require('./../../infrastructure/logger');
const organisationApi = require('./../../infrastructure/organisation');
const UserAccountAssertionModel = require('./userAssertionModel');
const issuerAssertions = require('./../../infrastructure/issuer');
const { directories } = require('login.dfe.dao');
const doesServiceMeetRequestCriteria = (service, req) => {
  if (service.serviceId.toLowerCase() !== req.params.serviceId.toLowerCase()) {
    return false;
  }

  if (req.params.organisationId && service.organisationId.toLowerCase() !== req.params.organisationId.toLowerCase()) {
    return false;
  }

  return true;
};

const get = async (req, res) => {
  const correlationId = req.header('x-correlation-id');
  try {
    if (!req.params.userId || !req.params.serviceId) {
      return res.status(400).send();
    }

    const user = await directories.getUser(req.params.userId);
    if (!user) {
      return res.status(404).send();
    }
    console.log('User sub -'+user.sub)

    let userOrganisation;
    if (req.params.organisationId) {
      const userOrganisations = await organisationApi.getOrganisationsForUser(req.params.userId, correlationId) || [];
      userOrganisation = userOrganisations.find(x => x.organisation.id.toLowerCase() === req.params.organisationId.toLowerCase());
      if (!userOrganisation) {
        return res.status(404).send();
      }
    }
    // This is a temporary code which is specific to coronavirus form.
    // This will bw updated based on online collections team fixes
    // This UID is specific to online collection service in dfe signin so even in production this UID is same
    if(req.params.serviceId === 'b45616a1-19a7-4a2e-966d-9e28c99bc6c6') {
      const services = await directories.getUserServices(req.params.userId);
      let service;
      let organisation = null;
      let issuerAssertion = null;
      if(services) {
        const servicesMeetingCriteria = services.filter(s => doesServiceMeetRequestCriteria(s, req));
        service = servicesMeetingCriteria && servicesMeetingCriteria.length > 0 ? servicesMeetingCriteria[0] : undefined;
      }
      if(service) {
        organisation = await organisationApi.getOrganisationById(service.organisationId, correlationId);
        if (!organisation) {
          return res.status(404).send();
        }
        issuerAssertion = await issuerAssertions.getById(service.serviceId);
        if (!issuerAssertion) {
          return res.status(404).send();
        }
        const userAccountAssertionModel = new UserAccountAssertionModel()
            .setUserPropertiesFromAccount(user)
            .setUserPropertiesFromUserOrganisation(userOrganisation)
            .setServicePropertiesFromService(service)
            .setOrganisationPropertiesFromOrganisation(organisation)
            .buildAssertions(issuerAssertion.assertions);
        const result = userAccountAssertionModel.export();
        res.send(result);
      }else{
        organisation = await organisationApi.getOrganisationById(req.params.organisationId, correlationId);
        if (!organisation) {
          return res.status(404).send();
        }
        issuerAssertion = await issuerAssertions.getById(req.params.serviceId);
        if (!issuerAssertion) {
          return res.status(404).send();
        }
        const userAccountAssertionModel = new UserAccountAssertionModel()
            .setUserPropertiesFromAccount(user)
            .setUserPropertiesFromUserOrganisation(userOrganisation)
            .setOrganisationPropertiesFromOrganisation(organisation)
            .buildAssertions(issuerAssertion.assertions);
        const result = userAccountAssertionModel.export();
        res.send(result);
      }
    }else {
      const services = await directories.getUserServices(req.params.userId);
      if (!services) {
        return res.status(404).send();
      }

      const servicesMeetingCriteria = services.filter(s => doesServiceMeetRequestCriteria(s, req));
      const service = servicesMeetingCriteria && servicesMeetingCriteria.length > 0 ? servicesMeetingCriteria[0] : undefined;
      if (!service) {
        return res.status(404).send();
      }

      const organisation = await organisationApi.getOrganisationById(service.organisationId, correlationId);
      if (!organisation) {
        return res.status(404).send();
      }

      const issuerAssertion = await issuerAssertions.getById(service.serviceId);
      if (!issuerAssertion) {
        return res.status(404).send();
      }

      const userAccountAssertionModel = new UserAccountAssertionModel()
          .setUserPropertiesFromAccount(user)
          .setUserPropertiesFromUserOrganisation(userOrganisation)
          .setServicePropertiesFromService(service)
          .setOrganisationPropertiesFromOrganisation(organisation)
          .buildAssertions(issuerAssertion.assertions);

      const result = userAccountAssertionModel.export();
      res.send(result);
    }
  } catch (e) {
    logger.error(e);
    res.status(500).send();
  }
};

module.exports = get;
