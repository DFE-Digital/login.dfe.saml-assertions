'use strict';

jest.mock('./../../src/infrastructure/logger', () => {
  return {};
});
jest.mock('agentkeepalive', () => ({
  HttpsAgent: jest.fn(),
}));
jest.mock('./../../src/infrastructure/config', () => ({
  hostingEnvironment: {
    agentKeepAlive: {},
  },
  directories: {
    type: 'static',
  },
  assertions: {
    type: 'static',
  },
  organisations: {
    type: 'static',
  },
}));
jest.mock('./../../src/infrastructure/account');
jest.mock('./../../src/infrastructure/organisation');
jest.mock('./../../src/infrastructure/issuer');
const httpMocks = require('node-mocks-http');
const accountAssertionModel = require('./../../src/app/assertions/userAssertionModel');

describe('When getting issuer assertions', () => {
  let req;
  let res;
  let logger;
  let get;
  let getUserByIdStub;
  let getOrganisationServicesByUserId;
  let getIssuerAssertions;
  let account;
  let organisationService;
  let issuerAssertions;
  const expectedKtsId = '654322';
  const expectedUserId = '123EDCF';
  const expectedServiceId = '3BFDE961-F061-4786-B618-618DEAF96E44';
  const expectedUserEmail = 'test@user.com';
  const expectedRequestCorrelationId = '41ab33e5-4c27-12e9-3451-abb349b12f35';
  const user = { sub: expectedUserId, email: expectedUserEmail };
  const issuerAssertion = { id: 'DQT1',
    assertions: [
      {
        Type: 'http://www.test.me.uk/SAUserId',
        Value: '__user.id__',
      },
      {
        Type: 'http://www.test.me.uk/ktsId',
        Value: '__k2s-id__',
      },
      {
        Type: 'http://www.test.me.uk/SomeParam',
        Value: '__user_param__',
      },
      {
        Type: 'http://www.test.me.uk/OrgId',
        Value: '__organisation.id__',
      },
    ] };
  const orgUser = [{
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
    externalIdentifiers: [
      { key: 'k2s-id', value: expectedKtsId },
      { key: 'Some_Id', value: '777777' },
    ],
  },{
    id: '3BFDE961-F061-4786-B618-618DEAF96E44',
    name: 'Test Service 2 (TS)',
    description: 'Second searchable test service.',
    status: 1,
    userId: '77D6B281-9F8D-4649-84B8-87FC42EEE71D',
    requestDate: '2017-01-01T00:00:00.000Z',
    approvers: [],
    organisation: {
      id: '9ceb2799-e34c-4398-9301-46d7c73af9d6',
      name: 'Test Org',
    },
    role: {
      id: 0,
      name: 'End user',
    },
    externalIdentifiers: [
      { key: 'k2s-id', value: expectedKtsId },
      { key: 'Some_Id', value: '88888888' },
    ],
  }];


  beforeEach(() => {
    res = httpMocks.createResponse();
    req = {
      params: {
        userId: expectedUserId,
        serviceId: expectedServiceId.toLowerCase(),
      },
      headers: {
        'x-correlation-id': expectedRequestCorrelationId,
      },
      header(header) {
        return this.headers[header];
      },
    };

    logger = require('./../../src/infrastructure/logger');
    logger.error = (() => ({}));

    getUserByIdStub = jest.fn().mockReturnValue(user);
    account = require('./../../src/infrastructure/account');
    account.getById = getUserByIdStub;

    getOrganisationServicesByUserId = jest.fn().mockReturnValue(orgUser);
    organisationService = require('./../../src/infrastructure/organisation');
    organisationService.getServicesByUserId = getOrganisationServicesByUserId;

    getIssuerAssertions = jest.fn().mockReturnValue(issuerAssertion);
    issuerAssertions = require('./../../src/infrastructure/issuer');
    issuerAssertions.getById = getIssuerAssertions;

    get = require('../../src/app/assertions/getAssertions');
  });
  afterEach(() => {
    expect(res._isEndCalled()).toBe(true);
  });

  it('then a bad request is returned if the user id is not passed', async () => {
    req.params.userId = '';

    await get(req, res);

    expect(res.statusCode).toBe(400);
  });
  it('then a bad request is returned if the issuer is not passed', async () => {
    req.params.serviceId = '';

    await get(req, res);

    expect(res.statusCode).toBe(400);
  });
  it('then if the user is not found a 404 is returned', async () => {
    account.getById.mockReset();
    account.getById.mockReturnValue(null);

    await get(req, res);

    expect(res.statusCode).toBe(404);
  });
  it('then if the org service is not found a 404 is returned', async () => {
    organisationService.getServicesByUserId.mockReset();
    organisationService.getServicesByUserId.mockReturnValue(null);

    await get(req, res);

    expect(res.statusCode).toBe(404);
  });
  it('then if the org service is not in the list of available services a 404 is returned', async () => {
    req.params.serviceId = '123456';

    await get(req, res);

    expect(res.statusCode).toBe(404);
  });
  it('then if the record is found it is returned in the response', async () => {
    account.getById.mockReset();
    account.getById.mockReturnValue(user);

    await get(req, res);

    expect(res.statusCode).toBe(200);
    expect(res._getData().email).toBe(expectedUserEmail);
    expect(res._getData().user_id).toBe(expectedUserId);
    expect(res._getData().kts_id).toBe(expectedKtsId);
    expect(account.getById.mock.calls[0][0]).toBe(expectedUserId);
    expect(account.getById.mock.calls[0][1]).toBe(expectedRequestCorrelationId);
  });
  it('then the assertionServices storage is called', async () => {
    await get(req, res);

    expect(issuerAssertions.getById.mock.calls[0][0]).toBe(expectedServiceId);
  });
  it('then if no assertions for the user are returned a 404 is returned', async () => {
    issuerAssertions.getById.mockReset();
    issuerAssertions.getById.mockReturnValue(null);

    await get(req, res);

    expect(res.statusCode).toBe(404);
  });
  it('then the assertions are mapped to the response', async () => {
    await get(req, res);

    expect(res._getData().Assertions[0].Value).toBe(expectedUserId);
  });

  it('then assertions with no map are not changed', async () => {
    await get(req, res);

    expect(res._getData().Assertions[1].Value).toBe(expectedKtsId);
  });

  it('then a 500 response is returned if there is an error', async () => {
    account.getById.mockReset();
    account.getById = () => {
      throw new Error();
    };

    await get(req, res);

    expect(res.statusCode).toBe(500);
  });

  it('then it should select service mapping for org when org specified', async () => {
    req.params.organisationId = '9ceb2799-e34c-4398-9301-46d7c73af9d6';
    account.getById.mockReset();
    account.getById.mockReturnValue(user);

    await get(req, res);

    expect(res.statusCode).toBe(200);
    expect(res._getData().email).toBe(expectedUserEmail);
    expect(res._getData().user_id).toBe(expectedUserId);

    const orgAssertion = res._getData().Assertions.find(x=>x.Type === 'http://www.test.me.uk/OrgId');
    expect(orgAssertion).toBeDefined();
    expect(orgAssertion.Value).toBe('9ceb2799-e34c-4398-9301-46d7c73af9d6');
  });
  it('then it should return 404 if not service mapping for org', async () => {
    req.params.organisationId = 'edcd90e1-b05c-4c6f-b5ef-080819f23b6c';

    await get(req, res);

    expect(res.statusCode).toBe(404);
  });
});
