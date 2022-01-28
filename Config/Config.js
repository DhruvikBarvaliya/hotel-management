const dotenv = require('dotenv');
dotenv.config();

const { Client } = require('pg')

const client = new Client({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  port: process.env.PORT,
  database: process.env.DATABASE
})

module.exports = client