exports.up = (knex) => {
  return knex.schema.createTable('job', (table) => {
    table.increments();
    table.integer('company_id')
      .notNullable()
      .references('id')
      .inTable('company')
      .onDelete('CASCADE');
    table.string('title').notNullable();
    table.text('description');
    table.string('url');
    table.integer('compensation').defaultTo(0);
    table.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('job');
};
