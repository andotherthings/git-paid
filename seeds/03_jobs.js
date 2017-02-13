/* eslint-disable camelcase, max-len */
'use strict';

exports.seed = function(knex) {
  return knex('job').del()
    .then(() => {
      return knex('job').insert([{
        id: 1,
        company_id: 1,
        title: 'Software Engineer',
        description: 'We’re looking for engineers that don’t just love solving challenging technical problems, but care about who we’re solving these problems for. We work closely with our product owners and our customers, iterating quickly to ensure we build the best solution for our users. In addition to scaling our website, we are looking for engineers who can solve problems from end to end. Our engineers contribute to the full stack of development, from data and schema storage to interactive JavaScript, and everything in between.',
        url: 'http://www.spacex.com',
        compensation: 100000,
        created_at: new Date('2017-02-02 14:26:16 UTC'),
        updated_at: new Date('2017-02-02 14:26:16 UTC')
      },
      {
        id: 2,
        company_id: 2,
        title: 'Front-end Engineer',
        description: 'We’re looking for engineers that don’t just love solving challenging technical problems, but care about who we’re solving these problems for. We work closely with our product owners and our customers, iterating quickly to ensure we build the best solution for our users. In addition to scaling our website, we are looking for engineers who can solve problems from end to end. Our engineers contribute to the full stack of development, from data and schema storage to interactive JavaScript, and everything in between.',
        url: 'http://www.google.com',
        compensation: 90000,
        created_at: new Date('2017-02-03 14:26:16 UTC'),
        updated_at: new Date('2017-02-03 14:26:16 UTC')
      },
    ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('job_id_seq', (SELECT MAX(id) FROM job));"
    );
    });
};
