const { getServiceById } = require('./../applications');

let assertionsCache = [];

const getServiceFromCacheOrApi = async (id, correlationId) => {
  const cached = assertionsCache.find(x => x.id.toLowerCase() === id.toLowerCase());
  if (cached && cached.expiresAt >= Date.now()) {
    return cached.assertions;
  } else if (cached) {
    assertionsCache = assertionsCache.filter(x => x.id.toLowerCase() !== id.toLowerCase());
  }

  const application = await getServiceById(id, correlationId);
  if (!application) {
    throw new Error(`Cannot get assertion mappings for service ${id} as it does not exist`, { correlationId });
  }
  if (!application.saml) {
    throw new Error(`Cannot get assertion mappings for service ${id} as it is not configured for SAML`, { correlationId });
  }

  const assertions = application.saml.assertions || [];
  assertionsCache.push({
    id: id,
    expiresAt: Date.now() + (5 * 60 * 1000), // Cache for 5 minutes
    assertions,
  });
  return assertions;
};

const getById = async (id, correlationId) => {
  const applicationAssertions = await getServiceFromCacheOrApi(id, correlationId);
  const assertions = applicationAssertions.map(a => ({
    Type: a.type,
    Value: a.value,
    FriendlyName: a.friendlyName,
  }));
  return { assertions };
};

module.exports = {
  getById
};