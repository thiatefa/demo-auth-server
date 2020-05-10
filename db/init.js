const Knex = require("knex");
const connection = require("../knexfile");

const knexConnection = Knex(connection);

knexConnection.schema
  .createTable("users", (table) => {
    table.string("id").primary();
    table.string("name");
    table.string("password");

    table.unique("id");
  })
  .then(() => {
    console.log("all done !");
    process.exit(0);
  });
