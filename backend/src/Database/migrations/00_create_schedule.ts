import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('schedule', table => {
    table.increments('id').primary().unique()
    
    table.string('name').notNullable()
    table.string('street').notNullable()
    table.integer('number').notNullable()
    table.string('phone').notNullable()
    table.string('photoURL').notNullable()
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('schedule')
}