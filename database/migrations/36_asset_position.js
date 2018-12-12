'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'asset_positions'
const assetTableName = 'assets'
const deviceTableName = 'devices'

class AssetPositionSchema extends Schema {
  up () {
    this.create(tableName, table => {
      table.increments()
      table
        .uuid('asset_id')
        .references('id')
        .inTable(assetTableName)
      table
        .uuid('device_id')
        .references('id')
        .inTable(deviceTableName)
      table.decimal('lat', null)
      table.decimal('lon', null)
      table.decimal('speed', null)
      table.decimal('bearing', null)
      table.decimal('accuracy', null)
      table.decimal('altitude', null)
      table.decimal('msg_var', null)
      table.string('mode', 1)
      table.string('status', 1)
      table.text('event_code')
      table.text('address')
      table.text('ip_port')
      table.jsonb('metadata')
      table.timestamp('position_at')
      table.timestamps(true, true)
    })
  }

  async down () {
    this.drop(tableName)
  }
}

module.exports = AssetPositionSchema
