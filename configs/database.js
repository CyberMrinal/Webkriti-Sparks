const {Client} = require('pg');

const client = new Client ({
	host: process.env.PSQL_HOST,
	user: process.env.PSQL_USER,
	password: process.env.PSQL_PASS,
	database: process.env.PSQL_DB,
	port: 5432
});

module.exports = client;