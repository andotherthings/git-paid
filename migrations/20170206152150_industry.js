exports.up = (knex) => {
  return knex.schema.createTable('industry', (table) => {
    table.increments();
    table.integer('job_id')
      .notNullable()
      .references('id')
      .inTable('job')
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
  return knex.schema.dropTable('industry');
};
