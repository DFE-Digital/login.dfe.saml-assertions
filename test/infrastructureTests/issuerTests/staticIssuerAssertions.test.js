const staticAssertionsStorage = require('./../../../src/infrastructure/issuer/staticIssuerAssertions');

describe('when using static assertion storage', () => {
  it('then it should return template', async () => {
    const actual = await staticAssertionsStorage.getById('ktsla');

    expect(actual).not.toBeNull();
    expect(actual.id).toBe('KTSLA');
    expect(actual.assertions).toBeInstanceOf(Array);
    expect(actual.assertions).toHaveLength(4);
    expect(actual.assertions[0]).toMatchObject({
      Type: 'http://www.edubase.gov.uk/SAUserId',
      Value: '__kts_id__',
    });
    expect(actual.assertions[1]).toMatchObject({
      Type: 'urn:oid:2.5.4.45',
      Value: '__kts_id__',
    });
    expect(actual.assertions[2]).toMatchObject({
      Type: 'LogonName',
      Value: '__kts_id__',
    });
    expect(actual.assertions[3]).toMatchObject({
      Type: 'EmailAddress',
      Value: '__email__',
    });
  });

  it('it should duplicate template to avoid singleton issues', async () => {
    const first = await staticAssertionsStorage.getById('ktsla');
    const second = await staticAssertionsStorage.getById('ktsla');

    expect(first).toEqual(second);
    expect(first).not.toBe(second);
    expect(first.assertions[0]).toEqual(second.assertions[0]);
    expect(first.assertions[0]).not.toBe(second.assertions[0]);
    expect(first.assertions[1]).toEqual(second.assertions[1]);
    expect(first.assertions[1]).not.toBe(second.assertions[1]);
    expect(first.assertions[2]).toEqual(second.assertions[2]);
    expect(first.assertions[2]).not.toBe(second.assertions[2]);
  });
});
