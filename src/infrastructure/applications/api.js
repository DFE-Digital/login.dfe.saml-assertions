const config = require('./../config');
const rp = require('login.dfe.request-promise-retry');
const jwtStrategy = require('login.dfe.jwt-strategies');

const getServiceById = async (id, correlationId) => {
  const token = await jwtStrategy(config.applications.service).getBearerToken();

  try {
    return await rp({
      method: 'GET',
      uri: `${config.applications.service.url}/services/${id}`,
      headers: {
        authorization: `bearer ${token}`,
        'x-correlation-id': correlationId,
      },
      json: true,
    });

  } catch (e) {
    if (e.statusCode === 404) {
      return undefined;
    }
    throw e;
  }
};

module.exports = {
  getServiceById,
};
