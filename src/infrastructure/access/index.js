/* eslint-disable global-require */
const config = require('./../config');

let access;
if (config.access.type.toLowerCase() === 'api') {
  access = require('./api');
} else {
  access = require('./static');
}
module.exports = access;
