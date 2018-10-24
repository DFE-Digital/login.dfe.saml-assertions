const SimpleSchema = require('simpl-schema').default;
const { validateConfigAgainstSchema, schemas } = require('login.dfe.config.schema.common');
const config = require('./index');
const logger = require('./../logger');

const assertionsSchema = new SimpleSchema({
  type: {
    type: String,
    allowedValues: ['static', 'applications', 'redis']
  },
});

const schema = new SimpleSchema({
  loggerSettings: schemas.loggerSettings,
  hostingEnvironment: schemas.hostingEnvironment,
  directories: schemas.apiClient,
  organisations: schemas.apiClient,
  access: schemas.apiClient,
  applications: schemas.apiClient,
  assertions: assertionsSchema,
  auth: schemas.apiServerAuth,
});
module.exports.validate = () => {
  validateConfigAgainstSchema(config, schema, logger)
};