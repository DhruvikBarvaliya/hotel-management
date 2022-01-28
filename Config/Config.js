const { Client } = require('pg')

const client = new Client({
  host: 'localhost',
  user: 'postgres',
  password: 'root',
  port: 5435,
  database: 'hotel_management',
})

module.exports = client



