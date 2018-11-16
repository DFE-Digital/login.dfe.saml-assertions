'use strict';

const logger = require('./../../infrastructure/logger');
const accountApi = require('./../../infrastructure/account');
const organisationApi = require('./../../infrastructure/organisation');
const UserAccountAssertionModel = require('./userAssertionModel');
const issuerAssertions = require('./../../infrastructure/issuer');
const { getServicesByUserId } = require('./../../infrastructure/access');
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

    const user = await accountApi.getById(req.params.userId, correlationId);
    if (!user) {
      return res.status(404).send();
    }

    let userOrganisation;
    if (req.params.organisationId) {
      const userOrganisations = await organisationApi.getOrganisationsForUser(req.params.userId, correlationId) || [];
      userOrganisation = userOrganisations.find(x => x.organisation.id.toLowerCase() === req.params.organisationId.toLowerCase());
      if (!userOrganisation) {
        return res.status(404).send();
      }
    }

    const services = await getServicesByUserId(req.params.userId, correlationId);
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
  } catch (e) {
    logger.error(e);
    res.status(500).send();
  }
};

module.exports = get;
