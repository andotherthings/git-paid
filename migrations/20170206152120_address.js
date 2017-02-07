exports.up = (knex) => {
  return knex.schema.createTable('address', (table) => {
    table.increments();
    table.string('street_1', 100).notNullable();
    table.string('street_2', 100).defaultTo('');
    table.string('city').notNullable();
    table.string('state').notNullable();
    table.string('zip').notNullable();
    table.string('country').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('address');
};
