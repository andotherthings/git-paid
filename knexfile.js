'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/gitpaid_dev',
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/gitpaid_test',
    debug: false,
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  }
};
