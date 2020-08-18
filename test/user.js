require('dotenv').config();
const chai = require('chai');
const chaiHttp = require('chai-http');
// const { describe } = require('mocha');
// const { it } = require('mocha');
const { app } = require('../app');

// assertion style
chai.should();
chai.use(chaiHttp);

describe('test the users API', () => {
  // test sign up
  describe('POST /users', () => {
    it('it should save new users to db', (done) => {
      // DATA YOU WANT TO SAVE TO DB
      const user = {
        firstname: 'Chinyelu',
        lastname: 'Ibute',
        email: 'chinyeluibute@gmail.com',
        password: 'okay',
      };
      chai.request(app)
        .post('/users')
        .send(user)
        .end((err, response) => {
          response.should.have.status(201);
          response.body.should.be.a('object');
          response.body.should.have.property('accessToken');
          response.body.should.have.property('success').eq(true);
          response.body.should.have.property('data');
          done();
        });
    });
  });
  // test login
});
