'use strict';

const express = require('express');
const apiAuth = require('login.dfe.api.auth');
const config = require('./../../infrastructure/config');
const { asyncWrapper } = require('login.dfe.express-error-handling');

const getAssertions = require('./getAssertions');

const router = express.Router();

const routeExport = () => {
  // Add auth middleware.
  if (config.hostingEnvironment.env !== 'dev') {
    router.use('/', apiAuth(router, config));
  }

  // Map routed to functions.
  router.get('/:userId/assertions/:serviceId', asyncWrapper(getAssertions));
  return router;
};

module.exports = routeExport();
