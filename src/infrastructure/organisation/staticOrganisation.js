
const orgServices = [
  {
    id: '3BFDE961-F061-4786-B618-618DEAF96E44',
    name: 'Test Service (TS)',
    description: 'A searchable test service.',
    status: 1,
    userId: '77D6B281-9F8D-4649-84B8-87FC42EEE71D',
    requestDate: '2017-01-01T00:00:00.000Z',
    approvers: [],
    organisation: {
      id: '88A1ED39-5A98-43DA-B66E-78E564EA72B0',
      name: 'Test Org',
    },
    role: {
      id: 0,
      name: 'End user',
    },
    externalIdentifiers: [],
  },
];


const getOrganisationById= async (id) => {
  const account = orgServices.find(item => item.organisation.id.toLowerCase() === id.toLowerCase());
  return Promise.resolve(account || null);
};

module.exports = {
  getOrganisationById,
};
