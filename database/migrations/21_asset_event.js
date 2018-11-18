'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'asset_events'
const assetTableName = 'assets'
const deviceTypeEventsTableName = 'device_type_events'

class AssetEventSchema extends Schema {
  up () {
    this.create(tableName, table => {
      table
        .uuid('id')
        .unique()
        .defaultTo(this.db.raw('public.gen_random_uuid()'))
      table
        .uuid('asset_id')
        .references('id')
        .inTable(assetTableName)
      table
        .integer('device_type_event_id')
        .references('id')
        .inTable(deviceTypeEventsTableName)
      table.text('name').notNullable()
      table.text('description')
      table.boolean('active').defaultTo(true)
      table.timestamp('activated_at').defaultTo(this.fn.now())
      table.timestamp('deactivated_at')
      table.jsonb('images')
      table.jsonb('metadata')
      table.timestamps()
    })
  }

  async down () {
    // await this.db.raw(`DROP TABLE IF EXISTS ${tableName} CASCADE;`) // this.drop(tableName)
    await this.db.raw(`DROP TABLE IF EXISTS ${tableName} CASCADE;`)
  }
}

module.exports = AssetEventSchema
