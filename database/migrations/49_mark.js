'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'marks'
const assetTableName = 'assets'
const userTableName = 'users'
const venueTableName = 'venues'
const formTableName = 'forms'
const clientContactTableName = 'client_contacts'

class MarkSchema extends Schema {
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
      table
        .uuid('asset_id')
        .references('id')
        .inTable(assetTableName)
      table
        .uuid('venue_id')
        .references('id')
        .inTable(venueTableName)
      table
        .integer('form_id')
        .references('id')
        .inTable(formTableName)
      table
        .integer('client_contact_id')
        .references('id')
        .inTable(clientContactTableName)
      table.decimal('lat', null)
      table.decimal('lon', null)
      table.decimal('speed', null)
      table.decimal('bearing', null)
      table.decimal('accuracy', null)
      table.decimal('altitude', null)
      table.text('notes')
      table.text('address')
      table.jsonb('images')
      table.jsonb('metadata')
      table.timestamp('executed_at')
      table.timestamp('finished_at')
      table.timestamp('position_at')
      table.timestamps()
      table.index('user_id')
    })
  }

  down () {
    this.drop(tableName)
  }
}

module.exports = MarkSchema
