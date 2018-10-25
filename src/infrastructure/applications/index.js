/* eslint-disable global-require */
const config = require('./../config');

let access;
if (config.applications.type.toLowerCase() === 'api') {
  access = require('./api');
} else {
  access = require('./static');
}
module.exports = access;
