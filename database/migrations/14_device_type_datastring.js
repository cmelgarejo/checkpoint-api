'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'device_type_datastrings'
const deviceTypeTableName = 'device_types'

class DeviceTypeDatastringSchema extends Schema {
  up () {
    this.create(tableName, table => {
      table.increments()
      table
        .integer('device_type_id')
        .references('id')
        .inTable(deviceTypeTableName)
      table.text('description')
      table.text('regex')
      table.jsonb('metadata')
      table.timestamps(true, true)
    })
  }

  down () {
    this.drop(tableName)
  }
}

module.exports = DeviceTypeDatastringSchema
