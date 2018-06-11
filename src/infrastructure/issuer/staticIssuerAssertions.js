const issuerAssertions = [
  {
    id: '3bfde961-f061-4786-b618-618deaf96e44',
    assertions: [
      {
        Type: 'http://www.edubase.gov.uk/SAUserId',
        Value: '__k2s-id__'
      }, {
        Type: 'urn:oid:2.5.4.45',
        Value: '__k2s-id__'
      }, {
        Type: 'LogonName',
        Value: '__k2s-id__'
      }, {
        Type: 'EmailAddress',
        Value: '__email__'
      }
    ]
  },
  {
    id: '8fba5fde-832b-499b-957e-8bcd97d11b2d',
    assertions: [
      {
        Type: 'urn:oid:2.5.4.45',
        Value: '__saUserId__',
        FriendlyName: 'userId',
      }, {
        Type: 'https://sa.education.gov.uk/idp/org/organisationId',
        Value: '__organisationId__',
        FriendlyName: 'organisationId',
      }, {
        Type: 'https://sa.education.gov.uk/idp/user/groups',
        Value: '__groups__',
        FriendlyName: 'groups',
      }
    ]
  },
  {
    id: '0d15c5bd-ca2f-4211-b789-853bb34ce884',
    assertions: [
      {
        Type: 'urn:oid:2.5.4.45',
        Value: '__saUserId__',
        FriendlyName: 'userId',
      }, {
        Type: 'https://sa.education.gov.uk/idp/org/organisationId',
        Value: '__organisationId__',
        FriendlyName: 'organisationId',
      }, {
        Type: 'https://sa.education.gov.uk/idp/user/groups',
        Value: '__groups__',
        FriendlyName: 'groups',
      }
    ]
  },
  {
    id: 'aa4bd63e-61b8-421f-90df-8ef2cd15aa38',
    assertions: [
      {
        Type: 'urn:oid:2.5.4.45',
        Value: '__saUserId__',
        FriendlyName: 'userId',
      }, {
        Type: 'https://sa.education.gov.uk/idp/org/organisationId',
        Value: '__organisationId__',
        FriendlyName: 'organisationId',
      }, {
        Type: 'https://sa.education.gov.uk/idp/user/groups',
        Value: '__groups__',
        FriendlyName: 'groups',
      }
    ]
  },
  {
    id: 'ddfa2fa3-9824-4678-a2e0-f34d6d71948e',
    assertions: [
      {
        Type: 'urn:oid:2.5.4.45',
        Value: '__saUserId__',
        FriendlyName: 'userId',
      }, {
        Type: 'https://sa.education.gov.uk/idp/org/organisationId',
        Value: '__organisationId__',
        FriendlyName: 'organisationId',
      }, {
        Type: 'https://sa.education.gov.uk/idp/user/groups',
        Value: '__groups__',
        FriendlyName: 'groups',
      }
    ]
  }

];


const getById = async (id) => {
  const template = issuerAssertions.find(a => a.id.toLowerCase() === id.toLowerCase());
  const issuerAssertion = {
    id: template.id,
    assertions: template.assertions.map((a) => Object.assign({}, a))
  };
  return Promise.resolve(issuerAssertion || null);
};

module.exports = {
  getById
};
