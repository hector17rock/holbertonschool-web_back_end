const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./4-http');

chai.use(chaiHttp);
const { expect } = chai;

describe('HTTP Server', () => {
  it('should return "Hello Holberton School!" for root path', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello Holberton School!');
        done();
      });
  });

  it('should return "Hello Holberton School!" for any path', (done) => {
    chai.request(app)
      .get('/any_endpoint')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello Holberton School!');
        done();
      });
  });
});
