'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'form_details'
const formTableName = 'forms'

class FormSchema extends Schema {
  up () {
    this.create(tableName, table => {
      table.increments()
      table
        .integer('form_id')
        .references('id')
        .inTable(formTableName)
      table.text('name').notNullable()
      table.text('description')
      table.text('notes')
      table.jsonb('images')
      table.jsonb('metadata')
      table.timestamps()
    })
  }

  down () {
    this.drop(tableName)
  }
}

module.exports = FormSchema
