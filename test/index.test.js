const request = require('supertest');

const app = require('../src/app.js');

test('All routes should return the expected results', (data) => {
  request(app)
    .get('/search/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) data(err);
      data();
    });
});
