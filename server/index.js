const express = require('express')
//const bodyParser = require('body-parser')
const app = express()
// parse requests of content-type: application/json
app.use(express.json())
//root path
app.get('/', (request, response) => {
  response.send('api root/entry path')
  console.log('hello node api')
})
//named path
let students = []
app.post('/create', (request, response) => {
  const student = request.body
  students.push(student)
  response.status(200).send('created')
  console.log('data receive => ', student)
})
app.get('/getstudents', (request, response) => {
  response.status(200).send(students)
})

app.listen(3001, () => {
  console.log('Express is running on port 3001')
})
