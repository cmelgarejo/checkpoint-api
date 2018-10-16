'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'asset_sensor_records'
const assetSensorTableName = 'asset_sensors'
class AssetSensorRecordSchema extends Schema {
  up() {
    this.create(tableName, table => {
      table
        .integer('asset_sensor_id')
        .references('id')
        .inTable(assetSensorTableName)
      table.timestamps()
    })
  }

  down() {
    this.drop('asset_sensor_records')
  }
}

module.exports = AssetSensorRecordSchema
