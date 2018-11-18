'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'device_type_sensors'
const deviceTypeTableName = 'device_types'

class DeviceTypeSensorSchema extends Schema {
  up () {
    this.create(tableName, table => {
      table.increments()
      table
        .integer('device_type_id')
        .references('id')
        .inTable(deviceTypeTableName)
      table.text('name')
      table.text('description')
      table.text('unit')
      table.jsonb('metadata')
      table.timestamps()
    })
  }

  down () {
    this.drop(tableName)
  }
}

module.exports = DeviceTypeSensorSchema
