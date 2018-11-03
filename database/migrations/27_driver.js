'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'drivers'

class DriverSchema extends Schema {
  up() {
    this.create(tableName, table => {
      table
        .uuid('id')
        .unique()
        .defaultTo(this.db.raw('public.gen_random_uuid()'))
      table.text('name').notNullable()
      table.text('emails')
      table.text('phones')
      table.boolean('active').defaultTo(true)
      table.dateTime('activated_at').defaultTo(knex.fn.now())
      table.dateTime('deactivated_at')
      table.timestamps()
    })
  }

  down() {
    this.drop(tableName)
  }
}

module.exports = DriverSchema
