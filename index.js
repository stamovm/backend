'use strict'
const express = require('express')
const fs = require('fs')

const app = express()
const PORT = 5000
const QUIZ_FILE = './data/quizdata.json'

function writeObject(obj, file) {
  fs.writeFileSync(file, JSON.stringify(obj))
}
function readObject(file) {
  return JSON.parse(fs.readFileSync(file))
}

const myQuizzes = readObject(QUIZ_FILE)

app.get('/status', (req, res) => {
  res.send('Server is running on port ' + PORT)
})

app.get('/api/quizzes', (req, res) => {
  res.json(myQuizzes)
})

// writeObject(myQuizzes,QUIZ_FILE)

console.log(myQuizzes)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})
