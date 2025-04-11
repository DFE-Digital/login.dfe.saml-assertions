const fs = require('fs');
const os = require('os');
const path = require('path');

require('dotenv').config();

const config = {
  loggerSettings: {
    logLevel: "info",
    applicationName: "SAML Assertions API",
    auditDb: {
      host: process.env.PLATFORM_GLOBAL_SERVER_NAME,
      username: process.env.SVC_SIGNIN_ADT,
      password: process.env.SVC_SIGNIN_ADT_PASSWORD,
      dialect: "mssql",
      name: process.env.PLATFORM_GLOBAL_AUDIT_DATABASE_NAME,
      encrypt: true,
      schema: "dbo",
      pool: {
        max: 15,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    }
  },
  hostingEnvironment: {
    env: process.env.LOCAL_ENV || "azure",
    host: process.env.LOCAL_HOST || process.env.STANDALONE_ASSERTIONS_HOST_NAME,
    port: 443,
    sslCert: process.env.LOCAL_SSL_CERT || "",
    sslKey: process.env.LOCAL_SSL_KEY || "",
    protocol: "https",
    applicationInsights: process.env.APPLICATIONINSIGHTS_CONNECTION_STRING,
    agentKeepAlive: {
      maxSockets: 35,
      maxFreeSockets: 10,
      timeout: 60000,
      keepAliveTimeout: 30000
    }
  },
  directories: {
    type: "api",
    service: {
      url: "https://" + process.env.STANDALONE_DIRECTORIES_HOST_NAME,
      auth: {
        type: "aad",
        tenant: process.env.PLATFORM_GLOBAL_TENANT_DOMAIN,
        authorityHostUrl: process.env.TENANT_URL,
        clientId: process.env.AAD_SHD_CLIENT_ID,
        clientSecret: process.env.AAD_SHD_CLIENT_SECRET,
        resource: process.env.AAD_SHD_APP_ID
      }
    }
  },
  organisations: {
    type: "api",
    service: {
      url: "https://" + process.env.STANDALONE_ORGANISATIONS_HOST_NAME,
      auth: {
        type: "aad",
        tenant: process.env.PLATFORM_GLOBAL_TENANT_DOMAIN,
        authorityHostUrl: process.env.TENANT_URL,
        clientId: process.env.AAD_SHD_CLIENT_ID,
        clientSecret: process.env.AAD_SHD_CLIENT_SECRET,
        resource: process.env.AAD_SHD_APP_ID
      }
    }
  },
  access: {
    type: "api",
    service: {
      url: "https://" + process.env.STANDALONE_ACCESS_HOST_NAME,
      auth: {
        type: "aad",
        tenant: process.env.PLATFORM_GLOBAL_TENANT_DOMAIN,
        authorityHostUrl: process.env.TENANT_URL,
        clientId: process.env.AAD_SHD_CLIENT_ID,
        clientSecret: process.env.AAD_SHD_CLIENT_SECRET,
        resource: process.env.AAD_SHD_APP_ID
      }
    }
  },
  applications: {
    type: "api",
    service: {
      url: "https://" + process.env.STANDALONE_APPLICATIONS_HOST_NAME,
      auth: {
        type: "aad",
        tenant: process.env.PLATFORM_GLOBAL_TENANT_DOMAIN,
        authorityHostUrl: process.env.TENANT_URL,
        clientId: process.env.AAD_SHD_CLIENT_ID,
        clientSecret: process.env.AAD_SHD_CLIENT_SECRET,
        resource: process.env.AAD_SHD_APP_ID
      }
    }
  },
  assertions: {
    type: "static"
  },
  auth: {
    type: "secret",
    secret: process.env.ASSERTIONS_SECRET
  },
  adapter: {
    type: "sequelize",
    directories: {
      host: process.env.PLATFORM_GLOBAL_SERVER_NAME,
      username: process.env.SVC_SIGNIN_DIR,
      password: process.env.SVC_SIGNIN_DIR_PASSWORD,
      dialect: "mssql",
      name: process.env.PLATFORM_GLOBAL_DIRECTORIES_DATABASE_NAME,
      encrypt: true,
      schema: "dbo",
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    },
    organisation: {
      host: process.env.PLATFORM_GLOBAL_SERVER_NAME,
      username: process.env.SVC_SIGNIN_ORG,
      password: process.env.SVC_SIGNIN_ORG_PASSWORD,
      dialect: "mssql",
      name: process.env.PLATFORM_GLOBAL_ORGANISATIONS_DATABASE_NAME,
      encrypt: true,
      schema: "dbo",
      pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    }
  },
  notifications: {
    connectionString: process.env.REDIS_CONN + "/4?tls=true"
  }
}

// Persist configuration to a temporary file and then point the `settings` environment
// variable to the path of the temporary file. The `login.dfe.dao` package can then load
// this configuration.
function mimicLegacySettings(config) {
  // TODO: This can be improved by refactoring the `login.dfe.dao` package.
  const tempDirectoryPath = fs.mkdtempSync(path.join(os.tmpdir(), 'config-'));
  const tempConfigFilePath = path.join(tempDirectoryPath, 'config.json');

  fs.writeFileSync(tempConfigFilePath, JSON.stringify(config), { encoding: 'utf8' });
  process.env.settings = tempConfigFilePath;
}

mimicLegacySettings(config);

module.exports = config; 