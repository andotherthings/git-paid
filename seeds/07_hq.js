/* eslint-disable camelcase, max-len */

exports.seed = knex => {
  return knex('hq').del()
    .then(() => {
      return knex('hq').insert([{
        id: 1,
        company_id: 1,
        address_id: 1,
        created_at: new Date('2017-02-02 14:26:16 UTC'),
        updated_at: new Date('2017-02-02 14:26:16 UTC'),
      },
      {
        id: 2,
        company_id: 2,
        address_id: 2,
        created_at: new Date('2017-02-02 14:26:16 UTC'),
        updated_at: new Date('2017-02-02 14:26:16 UTC'),
      },
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('hq_id_seq', (SELECT MAX(id) FROM hq));");
    });
};
