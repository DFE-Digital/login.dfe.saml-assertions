const rp = require('request-promise').defaults({
  forever: true,
  keepAlive: true,
});
const jwtStrategy = require('login.dfe.jwt-strategies');
const config = require('./../config');

const callDirectoriesApi = async (resource, body, method, reqId) => {
  const token = await jwtStrategy(config.directories.service).getBearerToken();
  try {
    const opts = {
      method,
      uri: `${config.directories.service.url}/${resource}`,
      headers: {
        authorization: `bearer ${token}`,
        'x-correlation-id': reqId,
      },
      json: true,
    };
    if (method === 'POST') {
      opts.body = body;
    }
    const result = await rp(opts);

    return {
      success: true,
      result,
    };
  } catch (e) {
    return {
      success: false,
      statusCode: e.statusCode,
      errorMessage: e.message,
    };
  }
};


const getById = async (id, reqId) => {
  const response = await callDirectoriesApi(`users/${id}`, null, 'GET', reqId);
  if (!response.success) {
    if (response.statusCode === 404) {
      return null;
    }
    throw new Error(response.errorMessage);
  }
  return response.result;
};


module.exports = {
  getById,
};
