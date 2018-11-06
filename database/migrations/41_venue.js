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
        .uuid('client_id')
        .references('id')
        .inTable(clientTableName)
      table
        .integer('client_contact_id')
        .references('id')
        .inTable(clientContactTableName)
      table.text('name').notNullable()
      table.text('description')
      table.text('address')
      table.float('lat')
      table.float('lon')
      table.integer('detection_radius')
      table.jsonb('images')
      table.jsonb('metadata')
      table.boolean('active').defaultTo(true)
      table.timestamp('activated_at').defaultTo(this.fn.now())
      table.timestamp('deactivated_at')
      table.timestamps()
    })
  }

  down() {
    this.drop(tableName)
  }
}

module.exports = VenueSchema
