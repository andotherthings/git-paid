exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.integer('linkedin_id').notNullable().unique();
    table.string('first_name', 100).notNullable();
    table.string('last_name', 100).notNullable();
    table.string('email').notNullable().unique();
    table.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('users');
};
