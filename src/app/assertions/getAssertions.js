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

    const userAccountAssertionModel = new UserAccountAssertionModel();
    userAccountAssertionModel.UserId = user.sub;
    userAccountAssertionModel.UserEmail = user.email;

    const ktsId = service.externalIdentifiers.find(filter => filter.key.toLowerCase() === 'k2s-id');
    if(ktsId) {
      userAccountAssertionModel.ktsId = ktsId.value;
    }

    const issuerAssertion = await issuerAssertions.getById(service.id);

    if (!issuerAssertion) {
      res.status(404).send();
      return;
    }

    userAccountAssertionModel.UserAssertions = [];

    issuerAssertion.assertions.forEach((assertion) => {
      const FriendlyName = assertion.FriendlyName;

      const value = service.externalIdentifiers.find(filter => `__${filter.key.toLowerCase()}__` === assertion.Value.toLowerCase());
      if (value) {
        userAccountAssertionModel.UserAssertions.push({Type: assertion.Type, Value: value.value, FriendlyName});
      } else if (Object.keys(userAccountAssertionModel).find((k) => `__${k.toLowerCase()}__` === assertion.Value.toLowerCase() )){
        const key = Object.keys(userAccountAssertionModel).find((k) => `__${k.toLowerCase()}__` === assertion.Value.toLowerCase()) ;
        userAccountAssertionModel.UserAssertions.push({Type: assertion.Type, Value: userAccountAssertionModel[key], FriendlyName});
      }
    });


    res.send(userAccountAssertionModel);
  } catch (e) {
    logger.error(e);
    res.status(500).send();
  }
};

module.exports = get;
