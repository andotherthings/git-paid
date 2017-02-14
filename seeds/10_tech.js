/* eslint-disable camelcase, max-len */

exports.seed = knex => {
  return knex('tech').del()
    .then(() => {
      return knex('tech').insert([{
        id: 1,
        application_id: 1,
        tag_id: 1,
        created_at: new Date('2017-02-02 14:26:16 UTC'),
        updated_at: new Date('2017-02-02 14:26:16 UTC'),
      },
      {
        id: 2,
        application_id: 1,
        tag_id: 3,
        created_at: new Date('2017-02-02 14:26:16 UTC'),
        updated_at: new Date('2017-02-02 14:26:16 UTC'),
      },
      {
        id: 3,
        application_id: 1,
        tag_id: 4,
        created_at: new Date('2017-02-02 14:26:16 UTC'),
        updated_at: new Date('2017-02-02 14:26:16 UTC'),
      },
      {
        id: 4,
        application_id: 2,
        tag_id: 2,
        created_at: new Date('2017-02-02 14:26:16 UTC'),
        updated_at: new Date('2017-02-02 14:26:16 UTC'),
      },
      {
        id: 5,
        application_id: 2,
        tag_id: 3,
        created_at: new Date('2017-02-02 14:26:16 UTC'),
        updated_at: new Date('2017-02-02 14:26:16 UTC'),
      },
      {
        id: 6,
        application_id: 2,
        tag_id: 4,
        created_at: new Date('2017-02-02 14:26:16 UTC'),
        updated_at: new Date('2017-02-02 14:26:16 UTC'),
      },
      {
        id: 7,
        application_id: 1,
        tag_id: 5,
        created_at: new Date('2017-02-02 14:26:16 UTC'),
        updated_at: new Date('2017-02-02 14:26:16 UTC'),
      },
      {
        id: 8,
        application_id: 2,
        tag_id: 6,
        created_at: new Date('2017-02-02 14:26:16 UTC'),
        updated_at: new Date('2017-02-02 14:26:16 UTC'),
      },
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('tech_id_seq', (SELECT MAX(id) FROM tech));");
    });
};
