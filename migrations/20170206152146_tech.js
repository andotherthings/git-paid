exports.up = (knex) => {
  return knex.schema.createTable('tech', (table) => {
    table.increments();
    table.integer('application_id')
      .notNullable()
      .references('id')
      .inTable('application')
      .onDelete('CASCADE');
    table.integer('tag_id')
      .notNullable()
      .references('id')
      .inTable('tag')
      .onDelete('CASCADE');
    table.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('tech');
};
