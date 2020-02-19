const express = require('express');
const path = require('path');
const err = require('./handlers/error');
const search = require('./handlers/search');

const app = express();

app.use(express.json());
app.set('port', process.env.PORT || 4000);

app.disable('x-powered-by');

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/search', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.post('/search', search);

app.use(err.client);
app.use(err.server);

module.exports = app;
