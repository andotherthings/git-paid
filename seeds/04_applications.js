/* eslint-disable camelcase, max-len */

exports.seed = knex => {
  return knex('application').del()
    .then(() => {
      return knex('application').insert([{
        id: 1,
        user_id: 1,
        job_id: 1,
        status: 'applied',
        role: 'Software Engineer',
        rating: 5,
        note: 'This job pays extremely well',
        created_at: new Date('2017-02-02 14:26:16 UTC'),
        updated_at: new Date('2017-02-02 14:26:16 UTC'),
      },
      {
        id: 2,
        user_id: 1,
        job_id: 2,
        status: 'have not applied',
        role: 'Android Engineer',
        rating: 4,
        note: 'I really like this company and think they are doing awesome things',
        created_at: new Date('2017-02-02 14:26:16 UTC'),
        updated_at: new Date('2017-02-02 14:26:16 UTC'),
      },
      {
        id: 3,
        user_id: 2,
        job_id: 1,
        status: 'applied',
        role: 'Software Engineer',
        rating: 4,
        note: 'I feel like this job would be challenging but I would learn a lot',
        created_at: new Date('2017-02-02 14:26:16 UTC'),
        updated_at: new Date('2017-02-02 14:26:16 UTC'),
      },
      {
        id: 4,
        user_id: 2,
        job_id: 2,
        status: 'have not applied',
        role: 'Android Engineer',
        rating: 3,
        note: 'The company culture seems like a great fit',
        created_at: new Date('2017-02-02 14:26:16 UTC'),
        updated_at: new Date('2017-02-02 14:26:16 UTC'),
      },
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('application_id_seq', (SELECT MAX(id) FROM application));");
    });
};
