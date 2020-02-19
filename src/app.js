const express = require('express');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 4000);

app.disable('x-powered-by');

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/search', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'search.html'));
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
