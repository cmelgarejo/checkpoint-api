'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'clients'
const userTableName = 'users'

class ClientSchema extends Schema {
  up () {
    this.create(tableName, table => {
      table
        .uuid('id')
        .unique()
        .defaultTo(this.db.raw('public.gen_random_uuid()'))
      table
        .uuid('user_id')
        .references('id')
        .inTable(userTableName)
      table.text('name').notNullable()
      table.text('description')
      table.jsonb('images')
      table.jsonb('metadata')
      table.timestamps(true, true)
      table.index('user_id')
    })
  }

  down () {
    this.drop(tableName)
  }
}

module.exports = ClientSchema
