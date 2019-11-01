const { Client } = require('pg');
// const generateBatchOfData = require('./dataGenerator.js');

const client = new Client({
  user: 'ethanhogan',
  host: 'localhost',
  database: 'sdcimages',
  port: 5432,
})

client.connect();

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
})


