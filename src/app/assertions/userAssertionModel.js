const userStatusMap = [
  { id: -2, code: 'deactivated-invitation', name: 'Deactivated Invitation' },
  { id: -1, code: 'invited', name: 'Invited' },
  { id: 0, code: 'deactivated', name: 'Deactivated' },
  { id: 1, code: 'active', name: 'Active' },
];

const getAssertionValues = (model, parentPath) => {
  const keys = Object.keys(model);
  const assertionValues = [];

  keys.forEach((key) => {
    const path = parentPath ? `${parentPath}.${key}` : key;
    const modelValue = model[key];
    if (modelValue instanceof Object && !(modelValue instanceof Array)) {
      const subValues = getAssertionValues(modelValue, path);
      assertionValues.push(...subValues);
    } else if (!(modelValue instanceof Array)) {
      assertionValues.push({
        path,
        value: modelValue,
      });
    }
  });

  return assertionValues;
};


class userAssertionModel {
  constructor() {
    this.user = {
      id: undefined,
      email: undefined,
      firstName: undefined,
      lastName: undefined,
      status: {
        id: undefined,
        name: undefined,
      },
      ktsId: undefined,
      externalIdentifiers: [],
      numericIdentifier: undefined,
      textIdentifier: undefined,
      roles: {
        codes: undefined,
      }
    };
    this.organisation = {
      id: undefined,
      name: undefined,
      status: {
        id: undefined,
        code: undefined,
        name: undefined,
      },
      establishmentNumber: undefined,
      dfeNumber: undefined,
      region: {
        id: undefined,
        name: undefined,
      },
      urn: undefined,
      uid: undefined,
      ukprn: undefined,
      companyRegistrationNumber: undefined,
      telephone: undefined,
      category: {
        id: undefined,
        name: undefined,
      },
      type: {
        id: undefined,
        name: undefined,
      },
      lowAge: undefined,
      highAge: undefined,
    };
    this.localAuthority = {
      id: undefined,
      name: undefined,
      code: undefined,
    };
    this.assertions = [];
  }


  setUserPropertiesFromAccount(account) {
    const status = userStatusMap.find(x => x.id === account.status);

    this.user.id = account.sub;
    this.user.email = account.email;
    this.user.firstName = account.given_name;
    this.user.lastName = account.family_name;
    this.user.status.id = account.status;
    this.user.status.code = status ? status.code : '';
    this.user.status.name = status ? status.name : '';

    return this;
  }

  setUserPropertiesFromUserOrganisation(userOrganisation) {
    if (userOrganisation) {
      this.user.numericIdentifier = userOrganisation.numericIdentifier;
      this.user.textIdentifier = userOrganisation.textIdentifier;
    }

    return this;
  }

  setServicePropertiesFromService(service) {
    this.user.externalIdentifiers = service.identifiers;

    const ktsId = service.identifiers.find(filter => filter.key.toLowerCase() === 'k2s-id');
    if (ktsId) {
      this.user.ktsId = ktsId.value;
    }

    if (service.roles) {
      this.user.roles.codes = service.roles.map(r => r.code).join(', ');
    }

    return this;
  }

  setOrganisationPropertiesFromOrganisation(organisation) {
    this.organisation.id = organisation.id;
    this.organisation.name = organisation.name;
    this.organisation.establishmentNumber = organisation.establishmentNumber;
    this.organisation.urn = organisation.urn;
    this.organisation.uid = organisation.uid;
    this.organisation.ukprn = organisation.ukprn;
    this.organisation.telephone = organisation.telephone;
    this.organisation.lowAge = organisation.statutoryLowAge;
    this.organisation.highAge = organisation.statutoryHighAge;
    this.organisation.legacyId = organisation.legacyId;
    this.organisation.dfeNumber = organisation.localAuthority && organisation.localAuthority.code && organisation.establishmentNumber
      ? `${organisation.localAuthority.code}${organisation.establishmentNumber}` : undefined;

    if (organisation.localAuthority) {
      this.localAuthority.id = organisation.localAuthority.id;
      this.localAuthority.name = organisation.localAuthority.name;
      this.localAuthority.code = organisation.localAuthority.code;
    } else if (organisation.category && organisation.category.id === '002') {
      this.localAuthority.id = organisation.id;
      this.localAuthority.name = organisation.name;
      this.localAuthority.code = organisation.establishmentNumber;
    }

    if (organisation.status) {
      this.organisation.status.id = organisation.status.id;
      this.organisation.status.name = organisation.status.name;
    }

    if (organisation.region) {
      this.organisation.region.id = organisation.region.id;
      this.organisation.region.name = organisation.region.name;
    }

    if (organisation.category) {
      this.organisation.category.id = organisation.category.id;
      this.organisation.category.name = organisation.category.name;
    }

    if (organisation.type) {
      this.organisation.type.id = organisation.type.id;
      this.organisation.type.name = organisation.type.name;
    }

    this.organisation.companyRegistrationNumber = organisation.companyRegistrationNumber;

    return this;
  }

  buildAssertions(issuerAssertions) {
    const assertionValues = getAssertionValues(this, undefined);

    issuerAssertions.forEach((assertion) => {
      let value = assertion.Value;
      const requiredSubs = value.match(/__([a-z,0-9,\-,.]{1,})__/gi) || [];
      requiredSubs.forEach((sub) => {
        const subPath = sub.slice(2, sub.length - 2)
        const externalIdentifer = this.user.externalIdentifiers.find(x => x.key.toLowerCase() == subPath.toLowerCase());
        const assertionValue = assertionValues.find(x => x.path.toLowerCase() == subPath.toLowerCase());
        let subValue = '';

        if (externalIdentifer) {
          subValue = externalIdentifer.value || '';
        } else if (assertionValue) {
          subValue = assertionValue.value || '';
        }

        value = value.replace(`__${subPath}__`, subValue);
      });

      if (value || assertion.Required === true) {
        this.assertions.push({
          Type: assertion.Type,
          Value: value,
          FriendlyName: assertion.FriendlyName,
        });
      }
    });

    return this;
  }

  export() {
    return {
      user_id: this.user.id,
      email: this.user.email,
      kts_id: this.user.ktsId,
      Assertions: this.assertions,
    }
  }
}

module.exports = userAssertionModel;
