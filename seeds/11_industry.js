/* eslint-disable camelcase, max-len */

exports.seed = knex => {
  return knex('industry').del()
    .then(() => {
      return knex('industry').insert([{
        id: 1,
        job_id: 1,
        tag_id: 1,
        created_at: new Date('2017-02-02 14:26:16 UTC'),
        updated_at: new Date('2017-02-02 14:26:16 UTC'),
      },
      {
        id: 2,
        job_id: 2,
        tag_id: 2,
        created_at: new Date('2017-02-02 14:26:16 UTC'),
        updated_at: new Date('2017-02-02 14:26:16 UTC'),
      },
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('industry_id_seq', (SELECT MAX(id) FROM industry));");
    });
};
