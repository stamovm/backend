import express from 'express';
import * as fs from 'fs';
import dataSample from './data/dataSample.js';

const app = express();
const PORT = 5000;
const QUIZ_FILE = './data/quizdata.json';

function writeObject(obj, file) {
  fs.writeFileSync(file, JSON.stringify(obj));
}
function readObject(file) {
  return JSON.parse(fs.readFileSync(file));
}

const myQuizzes = readObject(QUIZ_FILE);

app.use(function (req, res, next) {
  console.log(
    new Date().toLocaleString(),
    req.method,
    req.path + ' - ' + req.ip
  );
  next();
});

app.get('/status', (req, res) => {
  res.send('Server is running on port ' + PORT);
});

app.get('/api/quizzes', (req, res) => {
  console.log('sending data!');
  res.json(myQuizzes);
});

// console.log(dataSample);
// writeObject(dataSample, QUIZ_FILE);
// console.log(myQuizzes);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
