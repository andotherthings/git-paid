'use strict';

const app = require('../../../server');
const request = require('supertest')
const should = require('should');
const knex = require('../../../knex');
const series = require('es6-promise-series');

describe('Dashboard API routes:', () => {
  beforeEach(done => {
    series([
      knex('company')
        .insert({id: 2, name: 'Space X', }),
      knex('job')
        .insert({id: 3, company_id: 2, title: 'Rocket Scientist'}),
      knex('tag')
        .insert({id: 4, name: 'space'}),
      knex('industry')
        .insert({id: 5, job_id: 3, tag_id: 4}),
    ])
    .then(() => done())
    .catch(err => {
      console.log('BeforeHook:', err)
    });
  });

  afterEach(done => {
    series([
      knex('company').del(),
      knex('job').del(),
      knex('tag').del(),
      knex('industry').del(),
    ])
    .then(() => done())
    .catch(err => {
      console.log('AfterHook:', err)
    });
  });

  it('GET should return table row data', ( done ) => {
    request(app).get('/api/v1/dashboard')
      .expect('Content-type', /json/)
      .expect(200)
      .end((_err, res) => {
        res.status.should.equal(200);
        res.body.should.deepEqual({
          jobApps: [{
            companyName: 'Space X',
            jobTitle: 'Rocket Scientist',
            industries: [
              'Space',
              'Rockets',
              'Satellites'
            ],
          }],
        });
        done();
      });
  });
});
