'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'venue_types'

class VenueTypeSchema extends Schema {
  up () {
    this.create(tableName, table => {
      table.increments()
      table.text('name').notNullable()
      table.text('description')
      table.jsonb('images')
      table.jsonb('metadata')
      table.timestamps()
    })
  }

  down () {
    this.drop(tableName)
  }
}

module.exports = VenueTypeSchema
