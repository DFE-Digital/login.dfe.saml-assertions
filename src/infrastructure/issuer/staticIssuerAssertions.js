const issuerAssertions = [
  {
    id: '3bfde961-f061-4786-b618-618deaf96e44', //Key to Success (LAs)
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
    id: '8fba5fde-832b-499b-957e-8bcd97d11b2d', //EvolveAppropriateBody
    assertions: [
      {
        Type: 'urn:oid:2.5.4.45',
        Value: '__user.numericIdentifier__',
        FriendlyName: 'userId',
      }, {
        Type: 'https://sa.education.gov.uk/idp/org/organisationId',
        Value: '__organisation.legacyId__',
        FriendlyName: 'organisationId',
      }, {
        Type: 'https://sa.education.gov.uk/idp/user/groups',
        Value: '__user.roles.codes__',
        FriendlyName: 'groups',
      }
    ]
  },
  {
    id: '0d15c5bd-ca2f-4211-b789-853bb34ce884', //EvolveTrainingProvider
    assertions: [
      {
        Type: 'urn:oid:2.5.4.45',
        Value: '__user.numericIdentifier__',
        FriendlyName: 'userId',
      }, {
        Type: 'https://sa.education.gov.uk/idp/org/organisationId',
        Value: '__organisation.legacyId__',
        FriendlyName: 'organisationId',
      }, {
        Type: 'https://sa.education.gov.uk/idp/user/groups',
        Value: '__user.roles.codes__',
        FriendlyName: 'groups',
      }
    ]
  },
  {
    id: 'aa4bd63e-61b8-421f-90df-8ef2cd15aa38', //EvolveEmpAccessSchool
    assertions: [
      {
        Type: 'urn:oid:2.5.4.45',
        Value: '__user.numericIdentifier__',
        FriendlyName: 'userId',
      }, {
        Type: 'https://sa.education.gov.uk/idp/org/organisationId',
        Value: '__organisation.legacyId__',
        FriendlyName: 'organisationId',
      }, {
        Type: 'https://sa.education.gov.uk/idp/user/groups',
        Value: '__user.roles.codes__',
        FriendlyName: 'groups',
      }
    ]
  },
  {
    id: 'ddfa2fa3-9824-4678-a2e0-f34d6d71948e', //EvolveEmpAccessAgent
    assertions: [
      {
        Type: 'urn:oid:2.5.4.45',
        Value: '__user.numericIdentifier__',
        FriendlyName: 'userId',
      }, {
        Type: 'https://sa.education.gov.uk/idp/org/organisationId',
        Value: '__organisation.legacyId__',
        FriendlyName: 'organisationId',
      }, {
        Type: 'https://sa.education.gov.uk/idp/user/groups',
        Value: '__user.roles.codes__',
        FriendlyName: 'groups',
      }
    ]
  },
  {
    id: 'df2ae7f3-917a-4489-8a62-8b9b536a71cc', //RaiseOnline
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
        Value: '__organisation.legacyId__'
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
        Value: '__user.textIdentifier__'
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
        Value: '__user.numericIdentifier__'
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
        Value: '__user.roles.codes__'
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
    id: '2354cb2e-f559-4bf4-9981-4f6c6890aa5e', // Get Info about schools
    assertions: [
      {
        Type: 'https://sa.education.gov.uk/idp/user/groups',
        Value: '__user.roles.codes__',
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
        Value: '__organisation.legacyId__',
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
        Value: '__user.numericIdentifier__',
        FriendlyName: 'userId'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/user/userStatusCode',
        Value: '__user.status.code__',
        FriendlyName: 'userStatusCode'
      },
      {
        Type: 'urn:oid:0.9.2342.19200300.100.1.1',
        Value: '__user.textIdentifier__',
        FriendlyName: 'userName'
      }
    ]
  },
  {
    id: '09c66a38-c8c2-448d-87c5-a4895fb7f8de', // P16
    assertions: [
      {
        Type: 'urn:oid:2.5.4.10',
        Value: '__organisation.name__',
        FriendlyName: 'organisationName'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/localAuthority',
        Value: '__localAuthority.code__',
        FriendlyName: 'localAuthority'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/orgStatusName',
        Value: '__organisation.status.name__',
        FriendlyName: 'orgStatusName'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/establishment/dfeNumber',
        Value: '__organisation.dfeNumber__',
        FriendlyName: 'dfeNumber'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/organisationId',
        Value: '__organisation.legacyId__',
        FriendlyName: 'organisationId'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/establishment/ascLowestAge',
        Value: '__organisation.lowAge__',
        FriendlyName: 'ascLowestAge'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/establishment/number',
        Value: '__organisation.establishmentNumber__',
        FriendlyName: 'establishmentNumber'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/regionName',
        Value: '__organisation.region.name__',
        FriendlyName: 'regionName'
      },
      {
        Type: 'urn:oid:2.5.4.42',
        Value: '__user.firstName__',
        FriendlyName: 'firstName'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/uKPRN',
        Value: '__organisation.ukprn__',
        FriendlyName: 'uKPRN'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/uID',
        Value: '__organisation.uid__',
        FriendlyName: 'uID'
      },
      {
        Type: 'urn:oid:0.9.2342.19200300.100.1.1',
        Value: '__user.textIdentifier__',
        FriendlyName: 'userName'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/orgStatusCode',
        Value: '__organisation.status.id__',
        FriendlyName: 'orgStatusCode'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/establishment/statutoryHighestAge',
        Value: '__organisation.highAge__',
        FriendlyName: 'statutoryHighestAge'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/user/userStatusName',
        Value: '__user.status.name__',
        FriendlyName: 'userStatusName'
      },
      {
        Type: 'urn:oid:2.5.4.45',
        Value: '__user.numericIdentifier__',
        FriendlyName: 'userId'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/localAuthorityName',
        Value: '__localAuthority.name__',
        FriendlyName: 'localAuthorityName'
      },
      {
        Type: 'urn:oid:2.5.4.20',
        Value: '__organisation.telephone__',
        FriendlyName: 'telephoneNumber'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/user/groups',
        Value: '__user.roles.codes__',
        FriendlyName: 'groups'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/establishment/ascHighestAge',
        Value: '__organisation.highAge__',
        FriendlyName: 'ascHighestAge'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/establishment/ageRange',
        Value: '__organisation.lowAge__ - __organisation.highAge__',
        FriendlyName: 'ageRange'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/typeCode',
        Value: '__organisation.category.id__',
        FriendlyName: 'typeCode'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/establishment/uRN',
        Value: '__organisation.urn__',
        FriendlyName: 'uRN'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/establishment/establishmentTypeName',
        Value: '__organisation.category.name__',
        FriendlyName: 'establishmentTypeName'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/regionCode',
        Value: '__organisation.region.id__',
        FriendlyName: 'regionCode'
      },
      {
        Type: 'urn:oid:1.2.840.113549.1.9.1',
        Value: '__user.email__',
        FriendlyName: 'email'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/user/userStatusCode',
        Value: '__user.status.code__',
        FriendlyName: 'userStatusCode'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/establishment/establishmentTypeCode',
        Value: '__organisation.type.id__',
        FriendlyName: 'establishmentTypeCode'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/typeName',
        Value: '__organisation.category.name__',
        FriendlyName: 'typeName'
      },
      {
        Type: 'urn:oid:2.5.4.4',
        Value: '__user.lastName__',
        FriendlyName: 'lastName'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/establishment/statutoryLowestAge',
        Value: '__organisation.lowAge__',
        FriendlyName: 'statutoryLowestAge'
      }
    ]
  },
  {
    id: '913ba321-9547-46b2-93c3-a7a7ffc2e3e2', // IEX
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
        Value: '__organisation.legacyId__',
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
        Value: '__user.numericIdentifier__',
        FriendlyName: 'userId'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/user/userStatusCode',
        Value: '__user.status.code__',
        FriendlyName: 'userStatusCode'
      },
      {
        Type: 'urn:oid:0.9.2342.19200300.100.1.1',
        Value: '__user.textIdentifier__',
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
    id: '57e972f8-0eda-4f0f-aaf9-50b55662c528', // Key to Success (Schools)
    assertions: [
      {
        Type: 'urn:oid:2.5.4.10',
        Value: '__organisation.name__',
        FriendlyName: 'organisationName'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/localAuthority',
        Value: '__localAuthority.code__',
        FriendlyName: 'localAuthority'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/orgStatusName',
        Value: '__organisation.status.name__',
        FriendlyName: 'orgStatusName'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/establishment/dfeNumber',
        Value: '__organisation.dfeNumber__',
        FriendlyName: 'dfeNumber'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/organisationId',
        Value: '__organisation.legacyId__',
        FriendlyName: 'organisationId'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/establishment/ascLowestAge',
        Value: '__organisation.lowAge__',
        FriendlyName: 'ascLowestAge'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/establishment/number',
        Value: '__organisation.establishmentNumber__',
        FriendlyName: 'establishmentNumber'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/regionName',
        Value: '__organisation.region.name__',
        FriendlyName: 'regionName'
      },
      {
        Type: 'urn:oid:2.5.4.42',
        Value: '__user.firstName__',
        FriendlyName: 'firstName'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/uKPRN',
        Value: '__organisation.ukprn__',
        FriendlyName: 'uKPRN'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/uID',
        Value: '__organisation.uid__',
        FriendlyName: 'uID'
      },
      {
        Type: 'urn:oid:0.9.2342.19200300.100.1.1',
        Value: '__user.textIdentifier__',
        FriendlyName: 'userName'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/orgStatusCode',
        Value: '__organisation.status.id__',
        FriendlyName: 'orgStatusCode'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/establishment/statutoryHighestAge',
        Value: '__organisation.highAge__',
        FriendlyName: 'statutoryHighestAge'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/user/userStatusName',
        Value: '__user.status.name__',
        FriendlyName: 'userStatusName'
      },
      {
        Type: 'urn:oid:2.5.4.45',
        Value: '__user.numericIdentifier__',
        FriendlyName: 'userId'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/localAuthorityName',
        Value: '__localAuthority.name__',
        FriendlyName: 'localAuthorityName'
      },
      {
        Type: 'urn:oid:2.5.4.20',
        Value: '__organisation.telephone__',
        FriendlyName: 'telephoneNumber'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/user/groups',
        Value: '__user.roles.codes__',
        FriendlyName: 'groups'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/establishment/ascHighestAge',
        Value: '__organisation.highAge__',
        FriendlyName: 'ascHighestAge'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/establishment/ageRange',
        Value: '__organisation.lowAge__ - __organisation.highAge__',
        FriendlyName: 'ageRange'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/typeCode',
        Value: '__organisation.category.id__',
        FriendlyName: 'typeCode'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/establishment/uRN',
        Value: '__organisation.urn__',
        FriendlyName: 'uRN'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/establishment/establishmentTypeName',
        Value: '__organisation.type.name__',
        FriendlyName: 'establishmentTypeName'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/regionCode',
        Value: '__organisation.region.id__',
        FriendlyName: 'regionCode'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/user/userStatusCode',
        Value: '__user.status.code__',
        FriendlyName: 'userStatusCode'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/establishment/establishmentTypeCode',
        Value: '__organisation.type.id__',
        FriendlyName: 'establishmentTypeCode'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/typeName',
        Value: '__organisation.category.name__',
        FriendlyName: 'typeName'
      },
      {
        Type: 'urn:oid:2.5.4.4',
        Value: '__user.lastName__',
        FriendlyName: 'lastName'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/establishment/statutoryLowestAge',
        Value: '__organisation.lowAge__',
        FriendlyName: 'statutoryLowestAge'
      }
    ]
  },
  {
    id: '4fd40032-61a6-4beb-a6c4-6b39a3af81c1', // COLLECT
    assertions: [
      {
        Type: 'urn:oid:2.5.4.45',
        Value: '__user.numericIdentifier__',
        FriendlyName: 'userId'
      },
      {
        Type: 'urn:oid:0.9.2342.19200300.100.1.1',
        Value: '__user.textIdentifier__',
        FriendlyName: 'userName'
      }
    ]
  },
  {
    id: '09abfb35-3d09-41a7-9e4e-b8512b9b7d5e', // School 2 School
    assertions: [
      {
        Type: 'urn:oid:2.5.4.45',
        Value: '__user.numericIdentifier__',
        FriendlyName: 'userId'
      },
      {
        Type: 'urn:oid:0.9.2342.19200300.100.1.1',
        Value: '__user.textIdentifier__',
        FriendlyName: 'userName'
      }
    ]
  },
  {
    id: 'b45616a1-19a7-4a2e-966d-9e28c99bc6c6',
    assertions: [
      {
        Type: 'sAMAccountName',
        Value: '__user.id__',
        FriendlyName: 'sAMAccountName'
      },
      {
        Type: 'urn:oid:2.5.4.42',
        Value: '__user.firstName__',
        FriendlyName: 'firstName'
      },
      {
        Type: 'urn:oid:2.5.4.4',
        Value: '__user.lastName__',
        FriendlyName: 'lastName'
      },
      {
        Type: 'urn:oid:1.2.840.113549.1.9.1',
        Value: '__user.email__',
        FriendlyName: 'email'
      }, {
        Type: 'https://sa.education.gov.uk/idp/user/groups',
        Value: '__user.roles.codes__',
        FriendlyName: 'groups',
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/uKPRN',
        Value: '__organisation.ukprn__',
        FriendlyName: 'uKPRN'
      },
      {
        Type: 'urn:oid:2.5.4.45',
        Value: '__user.numericIdentifier__',
        FriendlyName: 'userId',
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
        Type: 'https://sa.education.gov.uk/idp/org/establishment/ascHighestAge',
        Value: '__organisation.highAge__',
        FriendlyName: 'ascHighestAge'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/establishment/ageRange',
        Value: '__organisation.lowAge__ - __organisation.highAge__',
        FriendlyName: 'ageRange'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/establishment/uRN',
        Value: '__organisation.urn__',
        FriendlyName: 'uRN'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/establishment/establishmentTypeName',
        Value: '__organisation.type.name__',
        FriendlyName: 'establishmentTypeName'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/regionCode',
        Value: '__organisation.region.id__',
        FriendlyName: 'regionCode'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/establishment/establishmentTypeCode',
        Value: '__organisation.type.id__',
        FriendlyName: 'establishmentTypeCode'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/establishment/statutoryLowestAge',
        Value: '__organisation.lowAge__',
        FriendlyName: 'statutoryLowestAge'
      },
      {
        Type: 'https://sa.education.gov.uk/idp/org/companyRegistrationNumber',
        Value: '__organisation.companyRegistrationNumber__',
        FriendlyName: 'companyRegistrationNumber'
      },
    ]
  },
  {
    id: 'b543b739-9791-4846-8638-cb35d66dd645',
    assertions: [
      {
        Type: 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn',
        Value: '__user.legacyUsername__',
        FriendlyName: 'upn'
      },
      {
        Type: 'http://schemas.portal.com/ukprn',
        Value: '__organisation.ukprn__',
        FriendlyName: 'ukprn'
      },
      {
        Type: 'http://schemas.portal.com/service',
        Value: '__user.roles.codes__',
        FriendlyName: 'service',
      },
      {
        Type: 'http://schemas.portal.com/displayname',
        Value: '__user.firstName__ __user.lastName__',
        FriendlyName: 'displayname'
      },
      {
        Type: 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name',
        Value: '__user.firstName__ __user.lastName__',
        FriendlyName: 'name'
      },
      {
        Type: 'http://schemas.portal.com/mail',
        Value: '__user.email__',
        FriendlyName: 'mail'
      },
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
