/* eslint-disable global-require */
const config = require('./../config');

let organisation;
if (config.organisations.type.toLowerCase() === 'api') {
  organisation = require('./organisationApiAccount');
} else {
  organisation = require('./staticOrganisation');
}
module.exports = organisation;
