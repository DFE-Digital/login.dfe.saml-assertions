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
        Value: '__user.status.code__'
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
  {
    id: '2354cb2e-f559-4bf4-9981-4f6c6890aa5e',
    assertions: [
      {
        Type: 'https://sa.education.gov.uk/idp/user/groups',
        Value: '__groups__',
        FriendlyName: 'groups'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/localAuthority',
        Value: '__localAuthority.code__',
        FriendlyName: 'localAuthority'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/localAuthorityName',
        Value: '__localAuthority.name__',
        FriendlyName: "localAuthorityName"
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/organisationId',
        Value: '__organisationId__',
        FriendlyName: 'organisationId'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/user/userStatusName',
        Value: '__user.status.name__',
        FriendlyName: 'userStatusName'
      },
      {
        Type: 'urn:oid:2.5.4.10',
        Value: '__organisation.name__',
        FriendlyName: 'organisationName'
      },
      {
        Type: 'urn:oid:2.5.4.42',
        Value: '__user.firstName__',
        FriendlyName: 'firstName'
      },
      {
        Type: 'urn:oid:1.2.840.113549.1.9.1',
        Value: '__user.email__',
        FriendlyName: 'email'
      },
      {
        Type: 'urn:oid:2.5.4.4',
        Value: '__user.lastName__',
        FriendlyName: 'lastName'
      },
      {
        Type: 'urn:oid:2.5.4.45',
        Value: '__saUserId__',
        FriendlyName: 'userId'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/user/userStatusCode',
        Value: '__user.status.code__',
        FriendlyName: 'userStatusCode'
      },
      {
        Type: 'urn:oid:0.9.2342.19200300.100.1.1',
        Value: '__saUserName__',
        FriendlyName: 'userName'
      }
    ]
  },
  {
    id: '09c66a38-c8c2-448d-87c5-a4895fb7f8de',
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
        Value: '__user.status.code__'
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
  {
    id: '913ba321-9547-46b2-93c3-a7a7ffc2e3e2',
    assertions: [
      {
        Type: 'urn:oid:2.5.4.10',
        Value: '__organisation.name__',
        FriendlyName: 'groups'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/uKPRN',
        Value: '__organisation.ukprn__',
        FriendlyName: 'uKPRN'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/companyRegistrationNumber',
        Value: '__organisation.companyRegistrationNumber__',
        FriendlyName: 'companyRegistrationNumber'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/localAuthority',
        Value: '__localAuthority.code__',
        FriendlyName: 'localAuthority'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/organisationId',
        Value: '__organisationId__',
        FriendlyName: 'organisationId'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/user/userStatusName',
        Value: '__user.status.name__',
        FriendlyName: 'userStatusName'
      },
      {
        Type: 'urn:oid:2.5.4.10',
        Value: '__organisation.name__',
        FriendlyName: 'organisationName'
      },
      {
        Type: 'urn:oid:2.5.4.42',
        Value: '__user.firstName__',
        FriendlyName: 'firstName'
      },
      {
        Type: 'urn:oid:1.2.840.113549.1.9.1',
        Value: '__user.email__',
        FriendlyName: 'email'
      },
      {
        Type: 'urn:oid:2.5.4.4',
        Value: '__user.lastName__',
        FriendlyName: 'lastName'
      },
      {
        Type: 'urn:oid:2.5.4.45',
        Value: '__saUserId__',
        FriendlyName: 'userId'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/user/userStatusCode',
        Value: '__user.status.code__',
        FriendlyName: 'userStatusCode'
      },
      {
        Type: 'urn:oid:0.9.2342.19200300.100.1.1',
        Value: '__saUserName__',
        FriendlyName: 'userName'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/typeCode',
        Value: '__organisation.category.id__',
        FriendlyName: 'typeCode'
      },
    ]
  },
  {
    id: '57e972f8-0eda-4f0f-aaf9-50b55662c528',
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
        Value: '__user.status.code__'
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
  {
    id: '4fd40032-61a6-4beb-a6c4-6b39a3af81c1',
    assertions: [
      {
        Type: 'urn:oid:2.5.4.45',
        Value: '__saUserId__',
        FriendlyName: 'userId'
      },
      {
        Type: 'urn:oid:0.9.2342.19200300.100.1.1',
        Value: '__saUserName__',
        FriendlyName: 'userName'
      }
    ]
  },
  {
    id: '09abfb35-3d09-41a7-9e4e-b8512b9b7d5e',
    assertions: [
      {
        Type: 'urn:oid:2.5.4.45',
        Value: '__saUserId__',
        FriendlyName: 'userId'
      },
      {
        Type: 'urn:oid:0.9.2342.19200300.100.1.1',
        Value: '__saUserName__',
        FriendlyName: 'userName'
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
