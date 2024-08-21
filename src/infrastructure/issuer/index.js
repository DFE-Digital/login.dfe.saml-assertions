/* eslint-disable global-require */
const config = require('./../config');

let account;
if (config.assertions.type.toLowerCase() === 'applications') {
  account = require('./applicationsIssuerAssertions');
} else {
  account = require('./staticIssuerAssertions');
}

module.exports = account;
