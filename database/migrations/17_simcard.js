'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'simcards'
const deviceTableName = 'devices'
const userTableName = 'users'

class SimcardSchema extends Schema {
  up () {
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
        .uuid('user_id')
        .references('id')
        .inTable(userTableName)
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
      table.jsonb('metadata')
      table.boolean('active').defaultTo(true)
      table.timestamp('activated_at').defaultTo(this.fn.now())
      table.timestamp('deactivated_at')
      table.timestamps(true, true)
      table.index('user_id')
    })
  }

  down () {
    this.drop(tableName)
  }
}

module.exports = SimcardSchema
