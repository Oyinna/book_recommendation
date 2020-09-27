/* eslint-disable no-undef */
require('dotenv').config();
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const feedbackInfo = require('../feedbackData');

// assertion style
chai.should();
chai.use(chaiHttp);

describe('test the feedback API', () => {
  // test sign up
  describe('POST /feedbacks', () => {
    it('it should save users feedback to db', (done) => {
      // DATA YOU WANT TO SAVE TO DB
      const feedback = feedbackInfo.correctFeedback();
      chai.request(app)
        .post('/feedbacks')
        .send(feedback)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('success').eq(true);
          res.body.should.have.property('message').eq('Thank you for the feedback');
          done();
        });
    });

    it('it should not save users feedback to db,not an array,', (done) => {
      // DATA YOU WANT TO SAVE TO DB
      const feedback = feedbackInfo.notArrayFeedback();
      chai.request(app)
        .post('/feedbacks')
        .send(feedback)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('success').eq(false);
          res.body.should.have.property('message').eq('complete the feedback!');
          done();
        });
    });

    it('it should not save users feedback to db,feedback is incomplete,', (done) => {
      // DATA YOU WANT TO SAVE TO DB
      const feedback = feedbackInfo.incompleteFeedback();
      chai.request(app)
        .post('/feedbacks')
        .send(feedback)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('success').eq(false);
          res.body.should.have.property('message').eq('complete the feedback');
          done();
        });
    });
  });
});
