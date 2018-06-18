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
        Value: '__user.email__'
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
  },
  {
    id: 'df2ae7f3-917a-4489-8a62-8b9b536a71cc',
    assertions: [
      {
        Type: 'urn:oid:2.5.4.10',
        Value: '__organisation.name__'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/localAuthority',
        Value: '__localAuthority.code__'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/orgStatusName',
        Value: '__organisation.status.name__'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/establishment/dfeNumber',
        Value: '__organisation.dfeNumber__'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/organisationId',
        Value: '__organisationId__'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/establishment/ascLowestAge',
        Value: '__organisation.lowAge__'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/establishment/number',
        Value: '__organisation.establishmentNumber__'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/regionName',
        Value: '__organisation.region.name__'
      },
      {
        Type: 'urn:oid:2.5.4.42',
        Value: '__user.firstName__'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/uKPRN',
        Value: '__organisation.ukprn__'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/uID',
        Value: '__organisation.uid__'
      },
      {
        Type: 'urn:oid:0.9.2342.19200300.100.1.1',
        Value: '__saUserName__'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/orgStatusCode',
        Value: '__organisation.status.id__'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/establishment/statutoryHighestAge',
        Value: '__organisation.highAge__'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/user/userStatusName',
        Value: '__user.status.name__'
      },
      {
        Type: 'urn:oid:2.5.4.45',
        Value: '__saUserId__'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/localAuthorityName',
        Value: '__localAuthority.name__'
      },
      {
        Type: 'urn:oid:2.5.4.20',
        Value: '__organisation.telephone__'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/user/groups',
        Value: '__groups__'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/establishment/ascHighestAge',
        Value: '__organisation.highAge__'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/establishment/ageRange',
        Value: '__organisation.lowAge__ - __organisation.highAge__'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/typeCode',
        Value: '__organisation.category.id__'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/establishment/uRN',
        Value: '__organisation.urn__'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/establishment/establishmentTypeName',
        Value: '__organisation.category.name__'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/regionCode',
        Value: '__organisation.region.id__'
      },
      {
        Type: 'urn:oid:1.2.840.113549.1.9.1',
        Value: '__user.email__'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/user/userStatusCode',
        Value: '__user.status.id__'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/establishment/establishmentTypeCode',
        Value: '__organisation.type.id__'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/typeName',
        Value: '__organisation.category.name__'
      },
      {
        Type: 'urn:oid:2.5.4.4',
        Value: '__user.lastName__'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/establishment/statutoryLowestAge',
        Value: '__organisation.lowAge__'
      }
    ]
  },
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
