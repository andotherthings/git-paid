'use strict';

const app = require('../../../server');
const request = require('supertest');
const should = require('should');
const knex = require('../../../knex');

describe('JobForm POST API:', () => {
  it('should post user input to the database', ( done ) => {
    request(app).post('/api/v1/new-job')
      .set('Accept', 'application/json')
      .expect(200)
      .send({
        company: {
          name: 'Boston Dynamics',
        },
        companyAddress: {
          street1: '123 Hill St',
          street2: '#42',
          city: 'Boston',
          state: 'MA',
          zip: '42424',
          country: 'China',
        },
        job: {
          title: 'Roboticist',
          description: 'Make dog bots for Slack',
          compensation: '42,000,000',
          techStack: ['Johnny5'],
          industries: ['Dog Walking', 'AI'],
          url: 'http://www.bostondynamics.com/',
        },
        jobAddress: {
          street1: '123 Hill St',
          street2: '#42',
          city: 'Boston',
          state: 'MA',
          zip: '42424',
          country: 'China',
        },
        interactions: [
          'Informational',
          'Applied',
        ],
      })
      .end((err, _res) => {
        if (err) throw err;
        done();
      })

  });
});
