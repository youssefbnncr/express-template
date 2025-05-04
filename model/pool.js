require("dotenv").config();
const { Pool } = require("pg");

module.exports = new Pool({
    connectionString: `postgresql://${process.env.USERNAME}:${process.env.PASSWORD}@localhost:5432/${process.env.DATABASE_NAME}`
});
