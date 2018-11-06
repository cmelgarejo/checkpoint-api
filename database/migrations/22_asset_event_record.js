'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'asset_event_records'
const assetEventTableName = 'asset_events'

class AssetEventRecordSchema extends Schema {
  up() {
    this.create(tableName, table => {
      table.increments()
      table
        .uuid('asset_event_id')
        .references('id')
        .inTable(assetEventTableName)
      table.text('message').notNullable()
      table.boolean('attended').defaultTo(false)
      table.jsonb('images')
      table.jsonb('metadata')
      table.timestamps()
    })
  }

  down() {
    this.drop(tableName)
  }
}

module.exports = AssetEventRecordSchema
