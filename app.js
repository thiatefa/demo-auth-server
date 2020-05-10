/**
 * Module dependencies.
 */
/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */

require("dotenv").config({ path: ".env" });

const express = require("express");
const bodyParser = require("body-parser");
const chalk = require("chalk");
const passport = require("passport");

const cors = require("cors");

if (!process.env.ENCRYPTION_KEY) {
  throw new Error("JWT encryption key required");
}

console.log(process.env.DATABASE_URL);

/**
 * Create Express server.
 */
const app = express();
const { authRouter } = require("./controllers/user");
/**
 * Express configuration.
 */
app.get("/healthz", require("express-healthcheck")());
app.use(cors());
app.set("host", "0.0.0.0");
app.set("port", process.env.PORT || 9999);
app.set("json spaces", 2); // number of spaces for indentation
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRouter);
/**
 * Start Express server.
 */
app.listen(app.get("port"), () => {
  console.log(
    "%s App is running at http://localhost:%d in %s mode",
    chalk.green("✓"),
    app.get("port"),
    app.get("env")
  );
  console.log("  Press CTRL-C to stop\n");
});

module.exports = app;
