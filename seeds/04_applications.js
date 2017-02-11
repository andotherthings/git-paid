/* eslint-disable camelcase, max-len */
'use strict';

exports.seed = function(knex) {
  return knex('application').del()
    .then(() => {
      return knex('application').insert([{
        id: 1,
        user_id: 1,
        job_id: 1,
        status: 'applied',
        role: 'Software Engineer',
        rating: 9,
        note: 'This job pays extremely well',
        created_at: new Date('2017-02-02 14:26:16 UTC'),
        updated_at: new Date('2017-02-02 14:26:16 UTC')
      },
      {
        id: 2,
        user_id: 1,
        job_id: 2,
        status: 'have not applied',
        role: 'Front-end Engineer',
        rating: 7,
        note: 'The company culture seems like a great fit',
        created_at: new Date('2017-02-02 14:26:16 UTC'),
        updated_at: new Date('2017-02-02 14:26:16 UTC')
      },
      {
        id: 3,
        user_id: 2,
        job_id: 1,
        status: 'applied',
        role: 'Software Engineer',
        rating: 5,
        note: 'This job pays extremely well',
        created_at: new Date('2017-02-02 14:26:16 UTC'),
        updated_at: new Date('2017-02-02 14:26:16 UTC')
      },
      {
        id: 4,
        user_id: 2,
        job_id: 2,
        status: 'have not applied',
        role: 'Front-end Engineer',
        rating: 4,
        note: 'The company culture seems like a great fit',
        created_at: new Date('2017-02-02 14:26:16 UTC'),
        updated_at: new Date('2017-02-02 14:26:16 UTC')
      },
    ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('application_id_seq', (SELECT MAX(id) FROM application));"
    );
    });
};
