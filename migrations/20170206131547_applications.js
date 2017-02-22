exports.up = (knex) => {
  return knex.schema.createTable('application', (table) => {
    table.increments();
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');
    table.integer('job_id')
      .notNullable()
      .references('id')
      .inTable('job')
      .onDelete('CASCADE');
    table.string('status');
    table.string('role');
    table.integer('rating');
    table.text('note', 'mediumtext');
    table.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('application');
};
