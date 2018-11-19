'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'activities'
const userTableName = 'users'

class ActivitySchema extends Schema {
  up () {
    this.create(tableName, table => {
      table.increments()
      table
        .uuid('user_id')
        .references('id')
        .inTable(userTableName)
      table.text('description').notNullable()
      table.boolean('event_trigger').defaultTo(false)
      table.boolean('private').defaultTo(false)
      table.jsonb('metadata')
      table.timestamps()
      table.index('user_id')
    })
  }

  async down () {
    this.drop(tableName)
  }
}

module.exports = ActivitySchema
