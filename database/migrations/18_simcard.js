'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'simcards'
const deviceTableName = 'devices'
class SimcardSchema extends Schema {
  up() {
    this.create(tableName, table => {
      table
        .uuid('id')
        .unique()
        .defaultTo(this.db.raw('public.gen_random_uuid()'))
      table
        .uuid('device_id')
        .references('id')
        .inTable(deviceTableName)
      table
        .text('number')
        .unique()
        .notNullable()
      table.text('pin')
      table.text('pin2')
      table.text('puk')
      table.text('puk2')
      table.text('billing_group')
      table.text('billing_date')
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

module.exports = SimcardSchema
