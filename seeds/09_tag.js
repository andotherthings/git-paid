/* eslint-disable camelcase, max-len */
'use strict';

exports.seed = function(knex) {
  return knex('tag').del()
    .then(() => {
      return knex('tag').insert([{
        id: 1,
        name: 'React',
        created_at: new Date('2017-02-02 14:26:16 UTC'),
        updated_at: new Date('2017-02-02 14:26:16 UTC')
      },
      {
        id: 2,
        name: 'Angular',
        created_at: new Date('2017-02-02 14:26:16 UTC'),
        updated_at: new Date('2017-02-02 14:26:16 UTC')
      },
      {
        id: 3,
        name: 'Node',
        created_at: new Date('2017-02-02 14:26:16 UTC'),
        updated_at: new Date('2017-02-02 14:26:16 UTC')
      },
      {
        id: 4,
        name: 'Express',
        created_at: new Date('2017-02-02 14:26:16 UTC'),
        updated_at: new Date('2017-02-02 14:26:16 UTC')
      },
    ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('tag_id_seq', (SELECT MAX(id) FROM tag));"
    );
    });
};
