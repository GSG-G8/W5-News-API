const path = require('path');

const server = ((err, req, res, next) => {
  res
    .status(500)
    .sendFile(path.join(__dirname, '..', 'public', 'error500.html'));
});
const client = ((req, res) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, '..', 'public', 'error404.html'));
});

module.exports = {
  server,
  client,
};
