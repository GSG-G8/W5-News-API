const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const fetch = require('node-fetch');
app.use(express.json());
app.set('port', process.env.PORT || 4000);

app.disable('x-powered-by');

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/search', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.post('/search', (req, res) => {
  const data = req.body.value;
  const url = `http://newsapi.org/v2/everything?q=${data}&apiKey=${process.env.apiKey}`;
  fetch(url)
    .then((reso) => reso.json())
    .then((body) => res.json(body.articles));
});

app.use((err, req, res, next) => {
  res
    .status(500)
    .sendFile(path.join(__dirname, '..', 'public', 'error500.html'));
});

app.use((req, res) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, '..', 'public', 'error404.html'));
});
module.exports = app;
