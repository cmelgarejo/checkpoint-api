'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'asset_positions'
const assetTableName = 'assets'
const deviceTableName = 'devices'

class AssetPositionSchema extends Schema {
  up() {
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
      table.float('lat')
      table.float('lon')
      table.float('speed')
      table.float('bearing')
      table.float('accuracy')
      table.float('altitude')
      table.float('msg_var')
      table.string('mode', 1)
      table.string('status', 1)
      table.text('event_code')
      table.text('address')
      table.text('ip_port')
      table.jsonb('metadata')
      table.timestamp('position_at')
      table.timestamps()
    })
  }

  async down() {
    this.drop(tableName)
  }
}

module.exports = AssetPositionSchema
