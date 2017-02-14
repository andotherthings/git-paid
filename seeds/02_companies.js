/* eslint-disable camelcase, max-len */

exports.seed = knex => {
  return knex('company').del()
    .then(() => {
      return knex('company').insert([{
        id: 1,
        name: 'SpaceX',
        created_at: new Date('2016-06-29 14:26:16 UTC'),
        updated_at: new Date('2016-06-29 14:26:16 UTC'),
      },
      {
        id: 2,
        name: 'Google',
        created_at: new Date('2016-06-29 14:26:16 UTC'),
        updated_at: new Date('2016-06-29 14:26:16 UTC'),
      },
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('company_id_seq', (SELECT MAX(id) FROM company));");
    });
};
