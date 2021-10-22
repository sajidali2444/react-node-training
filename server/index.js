const express = require('express')
const config = require('./config')
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
app.use('/teacher', require('./routes/teacherRoutes'))
app.use((er, req, res, next) => {
  console.log(err.stack)
  console.log(err.name)
  console.log(err.code)
  res.status(500).json({
    message: 'Something went wrong',
  })
})

app.listen(config.port || 3001, () => {
  console.log(`Express is running on port ${config.port}`)
})
