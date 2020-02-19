const fetch = require('node-fetch');
require('dotenv').config();

const search = (req, res) => {
  const data = req.body.value;
  const url = `http://newsapi.org/v2/everything?q=${data}&apiKey=${process.env.apiKey}`;
  fetch(url)
    .then((result) => result.json())
    .then((body) => res.json(body.articles));
};
module.exports = search;
