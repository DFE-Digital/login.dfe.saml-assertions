const issuerAssertions =
  {
    id: 'KTSLA',
    assertions: [
      {
        Type: 'http://www.edubase.gov.uk/SAUserId',
        Value: '__kts_id__',
      }, {
        Type: 'urn:oid:2.5.4.45',
        Value: '__kts_id__',
      }, {
        Type: 'LogonName',
        Value: '__kts_id__',
      },
    ],
  };


const getById = async (id) => {
  const issuerAssertion = {
    id: issuerAssertions.id,
    assertions: issuerAssertions.assertions.map((a) => Object.assign({}, a)),
  };
  return Promise.resolve(issuerAssertion || null);
};

module.exports = {
  getById,
};
