/* eslint-disable camelcase, max-len */

exports.seed = knex => {
  return knex('interaction').del()
    .then(() => {
      return knex('interaction').insert([{
        id: 1,
        application_id: 1,
        type: 'phone screen',
        note: 'Tech interview will be next Thursday.  Seemed to like me.',
        created_at: new Date('2017-02-02 14:26:16 UTC'),
        updated_at: new Date('2017-02-02 14:26:16 UTC'),
      },
      {
        id: 2,
        application_id: 3,
        type: 'phone screen',
        note: 'Tech interview will be next Thursday.  Seemed to like me.',
        created_at: new Date('2017-02-02 14:26:16 UTC'),
        updated_at: new Date('2017-02-02 14:26:16 UTC'),
      },
      {
        id: 3,
        application_id: 2,
        type: 'in person interview',
        note: 'I failed miserably.  Make sure to read up on closures and recursion for any future interviews',
        created_at: new Date('2017-02-02 14:26:16 UTC'),
        updated_at: new Date('2017-02-02 14:26:16 UTC'),
      },
      {
        id: 4,
        application_id: 4,
        type: 'phone screen',
        note: 'They didn\'t seem too impressed, but I have an in person interview next Tuesday at 1pm',
        created_at: new Date('2017-02-02 14:26:16 UTC'),
        updated_at: new Date('2017-02-02 14:26:16 UTC'),
      },
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('interaction_id_seq', (SELECT MAX(id) FROM interaction));");
    });
};
