/* eslint-disable no-undef */
require('dotenv').config();
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

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
        email: 'chinyeluibute11@gmail.com',
        password: 'okay',
      };
      chai.request(app)
        .post('/users')
        .send(user)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('accessToken');
          res.body.should.have.property('success').eq(true);
          res.body.should.have.property('data');
          done();
        });
    });

    it('it should not save new users to db user already exist,', (done) => {
      // DATA YOU WANT TO SAVE TO DB
      const user = {
        firstname: 'Chinyelu',
        lastname: 'Ibute',
        email: 'chinyeluibute1@gmail.com',
        password: 'okay',
      };
      chai.request(app)
        .post('/users')
        .send(user)
        .end((err, res) => {
          res.should.have.status(409);
          res.body.should.be.a('object');
          res.body.should.have.property('success').eq(false);
          res.body.should.have.property('message').eq('chinyeluibute1@gmail.com already exist');
          done();
        });
    });

    it('it should not save new users to db, incomplete field', (done) => {
      // DATA YOU WANT TO SAVE TO DB
      const user = {
        firstname: 'Chinyelu',
        email: 'chinyeluibute100@gmail.com',
        password: 'okay',
      };
      chai.request(app)
        .post('/users')
        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('success').eq(false);
          res.body.should.have.property('message').eq('complete the empty fields before submitting');
          done();
        });
    });

    it('it should not save new users to db, invalid email address', (done) => {
      // DATA YOU WANT TO SAVE TO DB
      const user = {
        firstname: 'Chinyelu',
        lastname: 'Ibute',
        email: 'chinyeluibute100@gmail.',
        password: 'okay',
      };
      chai.request(app)
        .post('/users')
        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('success').eq(false);
          res.body.should.have.property('message').eq('enter a valid email address');
          done();
        });
    });
  });
  // test login
  describe('GET /users/login', () => {
    it('authenticate user and sign him in', (done) => {
      // DATA YOU WANT TO SAVE TO DB
      const user = {
        email: 'chinyeluibute1@gmail.com',
        password: 'okay',
      };
      chai.request(app)
        .get('/users/login')
        .send(user)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('accessToken');
          res.body.should.have.property('success').eq(true);
          res.body.should.have.property('data');
          done();
        });
    });

    it('do not sign him in, incomplete field', (done) => {
      // DATA YOU WANT TO SAVE TO DB
      const user = {
        email: 'chinyeluibute1@gmail.com',
      };
      chai.request(app)
        .get('/users/login')
        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('success').eq(false);
          res.body.should.have.property('message').eq('complete the empty fields before submitting');
          done();
        });
    });

    it('do not sign him in, email address dose not exist', (done) => {
      // DATA YOU WANT TO SAVE TO DB
      const user = {
        email: 'chinyeluibute100@gmail.com',
        password: 'okay',
      };
      chai.request(app)
        .get('/users/login')
        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('success').eq(false);
          res.body.should.have.property('message').eq('Incorrect email or password');
          done();
        });
    });

    it('do not sign him in, incorrect password', (done) => {
      // DATA YOU WANT TO SAVE TO DB
      const user = {
        email: 'chinyeluibute100@gmail.com',
        password: 'okay1',
      };
      chai.request(app)
        .get('/users/login')
        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('success').eq(false);
          res.body.should.have.property('message').eq('Incorrect email or password');
          done();
        });
    });
  });
});
