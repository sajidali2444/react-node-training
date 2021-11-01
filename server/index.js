const express = require('express');
const db = require('./db');
var cors = require('cors');
const config = require('./config');
const app = express();
app.use(cors());

// parse requests of content-type: application/json
app.use(express.json());

//root path
app.get('/', (request, response) => {
  response.send('api root/entry path');
  console.log('hello node api');
});

app.get('/actors', async (request, response) => {
  let result = await db.execute('SELECT * FROM actor');
  console.log(result);
  return response.json(result[0]);
});
app.get('/actors/:id', async (request, response) => {
  const { id } = request.params;
  let result = await db.execute(`SELECT * FROM actor WHERE actor_id = ${id}`);
  return response.json(result[0]);
});
//named path
app.use('/teacher', require('./routes/teacherRoutes'));
app.use((err, req, res, next) => {
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
