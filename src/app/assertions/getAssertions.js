'use strict';

const logger = require('./../../infrastructure/logger');
const accountApi = require('./../../infrastructure/account');
const organisationApi = require('./../../infrastructure/organisation');
const UserAccountAssertionModel = require('./userAssertionModel');
const issuerAssertions = require('./../../infrastructure/issuer');

const doesServiceMeetRequestCriteria = (service, req) => {
  if (service.id.toLowerCase() !== req.params.serviceId.toLowerCase()) {
    return false;
  }

  if (req.params.organisationId && service.organisation.id.toLowerCase() !== req.params.organisationId.toLowerCase()) {
    return false;
  }

  return true;
};

const get = async (req, res) => {
  try {
    if (!req.params.userId || !req.params.serviceId) {
      return res.status(400).send();
    }

    const user = await accountApi.getById(req.params.userId, req.header('x-correlation-id'));
    if (!user) {
      return res.status(404).send();
    }

    const services = await organisationApi.getServicesByUserId(req.params.userId, req.header('x-correlation-id'));
    if (!services) {
      return res.status(404).send();
    }

    const servicesMeetingCriteria = services.filter(s => doesServiceMeetRequestCriteria(s, req));
    const service = servicesMeetingCriteria && servicesMeetingCriteria.length > 0 ? servicesMeetingCriteria[0] : undefined;
    if (!service) {
      return res.status(404).send();
    }

    const issuerAssertion = await issuerAssertions.getById(service.id);
    if (!issuerAssertion) {
      return res.status(404).send();
    }

    const userAccountAssertionModel = new UserAccountAssertionModel()
      .setUserPropertiesFromAccount(user)
      .setServicePropertiesFromService(service)
      .setOrganisationPropertiesFromOrganisation(service.organisation)
      .buildAssertions(issuerAssertion.assertions);

    const result = userAccountAssertionModel.export();
    res.send(result);
  } catch (e) {
    logger.error(e);
    res.status(500).send();
  }
};

module.exports = get;
