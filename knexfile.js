module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/git-paid',
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  },
};
