/* eslint-disable camelcase, max-len */

exports.seed = knex => {
  return knex('address').del()
    .then(() => {
      return knex('address').insert([{
        id: 1,
        street_1: '18390 NE 68th St',
        street_2: '',
        city: 'Redmond',
        state: 'WA',
        zip: '98052',
        country: 'USA',
        created_at: new Date('2017-02-02 14:26:16 UTC'),
        updated_at: new Date('2017-02-02 14:26:16 UTC'),
      }, {
        id: 2,
        street_1: '601 N 34th St',
        street_2: '',
        city: 'Seattle',
        state: 'WA',
        zip: '98103',
        country: 'USA',
        created_at: new Date('2017-02-02 14:26:16 UTC'),
        updated_at: new Date('2017-02-02 14:26:16 UTC'),
      },
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('address_id_seq', (SELECT MAX(id) FROM address));");
    });
};
