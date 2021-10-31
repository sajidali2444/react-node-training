const express = require('express');
const mysql = require('mysql');
var cors = require('cors');
const config = require('./config');
const app = express();
app.use(cors());

// parse requests of content-type: application/json
app.use(express.json());

// configure db
const mysqlDB = mysql.createConnection({
  host: config.dbHost,
  user: config.dbUser,
  password: config.dbPassword,
  database: config.dbName,
});
//mysqlDB.end();
//mysqlDB.destroy();
// open the MySQL connection
mysqlDB.connect(error => {
  if (error) {
    console.log(error);
    throw error;
  }
  console.log('Successfully connected to the database.');
});
//root path
app.get('/', (request, response) => {
  response.send('api root/entry path');
  console.log('hello node api');
});

app.get('/actors', (request, response) => {
  mysqlDB.query('SELECT * FROM actor', (error, dbResult) => {
    // console.log(result);
    response.send(dbResult);
    mysqlDB.end();
  });
});
//named path
app.use('/teacher', require('./routes/teacherRoutes'));
app.use((er, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);
  res.status(500).json({
    message: 'Something went wrong',
  });
});

app.listen(config.port || 3001, () => {
  console.log(`Express is running on port ${config.port}`);
});
