/* eslint-disable camelcase, max-len */

exports.seed = knex => {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
        id: 1,
        linkedin_id: 1,
        first_name: 'Bob',
        last_name: 'Wiley',
        email: 'bob@gmail.com',
        created_at: new Date('2016-06-29 14:26:16 UTC'),
        updated_at: new Date('2016-06-29 14:26:16 UTC'),
      },
      {
        id: 2,
        linkedin_id: 2,
        first_name: 'Elon',
        last_name: 'Musk',
        email: 'Elon@gmail.com',
        created_at: new Date('2016-06-29 14:26:16 UTC'),
        updated_at: new Date('2016-06-29 14:26:16 UTC'),
      },
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));");
    });
};
