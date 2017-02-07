exports.up = (knex) => {
  return knex.schema.createTable('company', (table) => {
    table.increments();
    table.string('name').notNullable().unique();
    table.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('company');
};
