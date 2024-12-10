const { organisation } = require("login.dfe.dao");

const getOrganisationById = async (id) => {
  const result = await organisation.getOrganisation(id);
  return result;
};

const getOrganisationsForUser = async (userId) => {
  const result =
    await organisation.getOrganisationsForUserIncludingServices(userId);
  return result;
};

module.exports = {
  getOrganisationById,
  getOrganisationsForUser,
};
