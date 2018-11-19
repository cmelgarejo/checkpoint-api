'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'items'
const userTableName = 'users'

class ItemSchema extends Schema {
  up () {
    this.create(tableName, table => {
      table.increments()
      table
        .uuid('user_id')
        .references('id')
        .inTable(userTableName)
      table.text('name').notNullable()
      table
        .text('code')
        .comment('Code used by the client to identify item in their system')
      table.text('description')
      table.text('notes')
      table.decimal('stock')
      table.decimal('min_qty')
      table.decimal('max_qty')
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

module.exports = ItemSchema
