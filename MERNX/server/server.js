
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const routesStud = require('./routes/student_route')
const routeLogin = require('./routes/login')
const cors = require('cors')

async function main() {
  mongoose.connect('mongodb://127.0.0.1:27017/testx');
  app.use(express.json())
  app.use(cors())
  app.use('/student', routesStud)
  app.use('/login',routeLogin)
  app.listen(5000), () => {
    console.log('server is running')
  }
  return 'done.';
}

main()
  .then(console.log)