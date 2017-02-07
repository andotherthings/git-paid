exports.up = (knex) => {
  return knex.schema.createTable('hq', (table) => {
    table.increments();
    table.integer('company_id')
      .notNullable()
      .references('id')
      .inTable('company')
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
  return knex.schema.dropTable('hq');
};
