'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'venues'
const userTableName = 'users'
const clientTableName = 'clients'
const clientContactTableName = 'client_contacts'

class VenueSchema extends Schema {
  up() {
    this.create(tableName, table => {
      table
        .uuid('id')
        .unique()
        .defaultTo(this.db.raw('public.gen_random_uuid()'))
      table
        .uuid('user_id')
        .references('id')
        .inTable(userTableName)
      table
        .uuid('user_id')
        .references('id')
        .inTable(clientTableName)
      table
        .uuid('user_id')
        .references('id')
        .inTable(clientContactTableName)

      table.timestamps()
    })
  }

  down() {
    this.drop(tableName)
  }
}

module.exports = VenueSchema
