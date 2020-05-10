// Update with your config settings.

const pg = require('pg');

module.exports = {
  client: 'pg',
  connection: process.env.DATABASE_URL
};
