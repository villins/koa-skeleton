const app = require('../../application.js');
const request = require('supertest')(app.listen(4000));
const should = require('should');

describe('test/controllers/home.test.js', () => {
  describe('#list', () => {
    it('should get / 200', (done) => {
      request.get('/').expect(200, (err, res) => {
        res.text.should.containEql('Welcome');
        done(err);
      })
    })
  })
})
