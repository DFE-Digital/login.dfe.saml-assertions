'use strict';

const logger = require('./../../infrastructure/logger');
const accountApi = require('./../../infrastructure/account');
const organisationApi = require('./../../infrastructure/organisation');
const UserAccountAssertionModel = require('./userAssertionModel');
const issuerAssertions = require('./../../infrastructure/issuer');

const get = async (req, res) => {
  try {
    if (!req.params.userId || !req.params.serviceId) {
      res.status(400).send();
      return;
    }

    const user = await accountApi.getById(req.params.userId, req.header('x-correlation-id'));
    if (!user) {
      res.status(404).send();
      return;
    }

    const services = await organisationApi.getServicesByUserId(req.params.userId, req.header('x-correlation-id'));
    if (!services) {
      res.status(404).send();
      return;
    }

    const service = services.find(serviceFilter => serviceFilter.id.toLowerCase() === req.params.serviceId.toLowerCase());
    if (!service) {
      res.status(404).send();
      return;
    }

    const issuerAssertion = await issuerAssertions.getById(service.id);
    if (!issuerAssertion) {
      res.status(404).send();
      return;
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
