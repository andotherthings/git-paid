exports.up = (knex) => {
  return knex.schema.createTable('tag', (table) => {
    table.increments();
    table.string('name', 25);
    table.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('tag');
};
