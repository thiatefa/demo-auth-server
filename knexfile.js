// Update with your config settings.


const pg = require('pg');
require("dotenv").config({ path: `${__dirname}/.env` });
console.log( process.env.DATABASE_URL);
module.exports = {
  client: 'pg',
  connection: process.env.DATABASE_URL
};

