// import modules

import express from 'express'

import { students } from './data/student-data.js'

// Create Express app

const app = express()

// Configure the app (app.set)

app.set('view engine', 'ejs')

// Mount Middleware (app.use)



// Mount routes

app.get('/', function(req, res) {
  res.redirect('/student')
})

app.get('/nothing', function(req, res) {
  res.send('<h1>You Know Nothing Jon Snow</h1>')
})

app.get('/home', function(req, res) {
  res.render('home')
})

app.get('/student', function(req, res) {
  res.render('students/index', {
    students: students
  })
})
// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})