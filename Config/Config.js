const dotenv = require('dotenv');
dotenv.config();

const { Client } = require('pg')

const client = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME
})

const port = process.env.PORT

module.exports = { client, port }