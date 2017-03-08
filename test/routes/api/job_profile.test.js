'use strict';

const app = require('../../../server');
const request = require('supertest');
const should = require('should');
const knex = require('../../../knex');
const series = require('es6-promise-series');

describe('JobProfile API routes:', () => {
  beforeEach(done => {
    series([
      knex('users')
        .insert({id: 1, first_name: 'Bob', last_name: 'Wiley', email: 'bob@mail.com', linkedin_id: 42}),
      knex('company')
        .insert({id: 2, name: 'ACME'}),
      knex('job')
        .insert({id: 3, company_id: 2, title: 'Boss Man', description: 'Cool stuff and thigns'}),
      knex('application')
        .insert({id: 4, user_id: 1, job_id: 3, note: 'Here are some notes'}),
      knex('interaction')
        .insert([{
          id: 5, application_id: 4, type: 'Applied'
        }, {
          id: 6, application_id: 4, type: 'Phone Screen'
        }]),
      knex('tag')
        .insert({id: 7, name: 'react'}),
      knex('tag')
        .insert({id: 8, name: 'express'}),
      knex('tag')
        .insert({id: 9, name: 'space'}),
      knex('tag')
        .insert({id: 10, name: 'magic'}),
      knex('tech')
        .insert({id: 12, application_id: 4, tag_id: 7}),
      knex('tech')
        .insert({id: 13, application_id: 4, tag_id: 8}),
      knex('industry')
        .insert({id: 14, job_id: 3, tag_id: 9}),
      knex('industry')
        .insert({id: 15, job_id: 3, tag_id: 10})
    ])
    .then(() => done())
    .catch(err => {
      console.log('BeforeHook:', err);
    });;
  });

  afterEach(done => {
    series([
      knex('users').del(),
      knex('company').del(),
      knex('job').del(),
      knex('application').del(),
      knex('interaction').del(),
      knex('tag').del(),
      knex('tech').del(),
      knex('industry').del()
    ])
    .then(() => done())
    .catch(err => {
      console.log('AfterEach:', err);
    });
  })

  it('GET should return data to populate the Job View', ( done ) => {
    request(app).get('/api/v1/job/3')
      .expect('Content-type', /json/)
      .expect(200)
      .end((_err, res) => {
        res.status.should.equal(200);
        res.body.should.deepEqual({
          company: {
            name: 'ACME',
          },
          job: {
            title: 'Boss Man',
            description: 'Cool stuff and things',
            notes: 'Here are some notes',
            techStack: ['react', 'express'],
            industries: ['space', 'magic'],
          },
          interactions: [
            'Applied',
            'Phone Screen'
          ],
        });
        done();
      });
  });
});
