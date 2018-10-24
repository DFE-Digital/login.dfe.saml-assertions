const { getServiceById } = require('./../applications');

const getById = async (id, correlationId) => {
  const application = await getServiceById(id, correlationId);
  if (!application) {
    throw new Error(`Cannot get assertion mappings for service ${id} as it does not exist`, { correlationId });
  }
  if (!application.saml) {
    throw new Error(`Cannot get assertion mappings for service ${id} as it is not configured for SAML`, { correlationId });
  }

  const assertions = (application.saml.assertions || []).map(a => ({
    Type: a.type,
    Value: a.value,
    FriendlyName: a.friendlyName,
  }));
  return {assertions};
};

module.exports = {
  getById
};