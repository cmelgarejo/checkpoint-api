'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'asset_devices'
const assetTableName = 'assets'
const deviceTableName = 'devices'

class AssetDeviceSchema extends Schema {
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
      table.timestamps()
    })
  }

  down () {
    this.drop(tableName)
  }
}

module.exports = AssetDeviceSchema
