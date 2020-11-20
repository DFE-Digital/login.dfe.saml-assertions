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

const adapterSchema = new SimpleSchema({
  type: {
    type: String,
    allowedValues: ['file', 'redis', 'mongo', 'azuread', 'sequelize'],
  },
  directories: {
    type: schemas.sequelizeConnection,
    optional: true,
  },
  organisation: {
    type: schemas.sequelizeConnection,
    optional: true,
  },
});

const notificationsSchema = new SimpleSchema({
  connectionString: patterns.redis,
});

const schema = new SimpleSchema({
  loggerSettings: schemas.loggerSettings,
  hostingEnvironment: schemas.hostingEnvironment,
  adapter: adapterSchema,
  directories: schemas.apiClient,
  organisations: schemas.apiClient,
  access: schemas.apiClient,
  applications: schemas.apiClient,
  assertions: assertionsSchema,
  auth: schemas.apiServerAuth,
  notifications: notificationsSchema,
});
module.exports.validate = () => {
  validateConfigAgainstSchema(config, schema, logger)
};
