'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'client_contacts'
const clientTableName = 'clients'

class ClientContactSchema extends Schema {
  up () {
    this.create(tableName, table => {
      table.increments()
      table
        .uuid('client_id')
        .references('id')
        .inTable(clientTableName)
      table.text('name').notNullable()
      table.text('document_id')
      table.text('notes')
      table.text('emails')
      table.text('phones')
      table.boolean('notify')
      table.jsonb('images')
      table.jsonb('metadata')
      table.timestamps(true, true)
    })
  }

  down () {
    this.drop(tableName)
  }
}

module.exports = ClientContactSchema
