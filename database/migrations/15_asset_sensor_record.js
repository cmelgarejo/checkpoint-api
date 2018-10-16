'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AssetSensorRecordSchema extends Schema {
  up () {
    this.create('asset_sensor_records', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('asset_sensor_records')
  }
}

module.exports = AssetSensorRecordSchema
