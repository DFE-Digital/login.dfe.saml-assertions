const jwtStrategy = require('login.dfe.jwt-strategies');
const config = require('./../config');
const rp = require('login.dfe.request-promise-retry');
const { organisation } = require('login.dfe.dao');


const callOrganisationApi = async (resource, body, method, reqId) => {
  const token = await jwtStrategy(config.organisations.service).getBearerToken();
  try {
    const opts = {
      method,
      uri: `${config.organisations.service.url}/${resource}`,
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


const getOrganisationById = async (id, reqId) => {
  const response = await callOrganisationApi(`organisations/v2/${id}`, null, 'GET', reqId);
  if (!response.success) {
    if (response.statusCode === 404) {
      return null;
    }
    throw new Error(response.errorMessage);
  }
  return response.result;
};

const getOrganisationsForUser = async (userId, reqId) => {
  const result = await organisation.getOrganisationsForUserIncludingServices(userId);
  return result;
};

module.exports = {
  getOrganisationById,
  getOrganisationsForUser,
};
