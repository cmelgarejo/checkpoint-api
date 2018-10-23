'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'asset_drivers'
const assetTableName = 'assets'
const driverTableName = 'drivers'

class AssetDriverSchema extends Schema {
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
        .inTable(driverTableName)
      table.timestamps()
    })
  }

  down() {
    this.drop(tableName)
  }
}

module.exports = AssetDriverSchema
