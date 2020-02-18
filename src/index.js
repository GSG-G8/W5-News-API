const app = require('./app');

app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log(`we are running on http://localhost:${app.get('port')}`);
});
