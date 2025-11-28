# DfE Sign-in SAML-Assertions

**DfE Sign-in SAML-Assertions** provides an API used to retrieve user data, optional organisation information, and user–service/organisation associations, converting them into SAML response fields for delivery to the service provider via the SAML proxy. This service is part of the wider **login.dfe** project.

## Getting Started

### Install Dependencies

```
npm install
```

### Run application

```
npm run dev
```

When deployed to an environment, a bearer token is required. The token can be generated with https://github.com/DFE-Digital/login.dfe.jwt-strategies.

### Run Tests

Run all tests with:

```
npm run test
```

### Code Quality and Formatting

Run ESLint:

```
npm run lint
```

Automatically fix lint issues:

```
npm run lint:fix
```

### Development Checks

Run linting and tests together:

```
npm run dev:checks
```

### Pre-commit Hooks

Pre-commit hooks are handled automatically via Husky. No additional setup is required.
