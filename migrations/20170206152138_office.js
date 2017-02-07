exports.up = (knex) => {
  return knex.schema.createTable('office', (table) => {
    table.increments();
    table.integer('job_id')
      .notNullable()
      .references('id')
      .inTable('job')
      .onDelete('CASCADE');
    table.integer('address_id')
      .notNullable()
      .references('id')
      .inTable('address')
      .onDelete('CASCADE');
    table.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.shema.dropTable('office');
};
