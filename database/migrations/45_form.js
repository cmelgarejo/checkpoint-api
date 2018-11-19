'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'forms'
const userTableName = 'users'

class FormSchema extends Schema {
  up () {
    this.create(tableName, table => {
      table.increments()
      table
        .uuid('user_id')
        .references('id')
        .inTable(userTableName)
      table.text('name').notNullable()
      table.text('description')
      table.text('notes')
      table.jsonb('images')
      table.jsonb('metadata')
      table.timestamps()
      table.index('user_id')
    })
  }

  down () {
    this.drop(tableName)
  }
}

module.exports = FormSchema
