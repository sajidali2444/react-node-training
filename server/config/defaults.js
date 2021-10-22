const mysql = require('mysql')
const config = require('../config')
const {
  dbHost: host,
  dbUser: user,
  dbName: database,
  dbPassword: password,
} = config
console.log({
  host,
  user,
  database,
  password,
})
const connection = mysql.createConnection({
  host,
  user,
  database,
  password,
})
//connection.connect()
connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack)
    return
  }
  console.log('connected as id ' + connection.threadId)
})
/*
const query = 'SELECT * FROM Teacher;'
connection.query(query, (err, result, fields) => {
  console.log(result)
})
*/

module.exports = connection
