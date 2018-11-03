'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'device_type_commands'
const deviceTypeTableName = 'device_types'

class DeviceTypeCommandSchema extends Schema {
  up() {
    this.create(tableName, table => {
      table.increments()
      table
        .integer('device_type_id')
        .references('id')
        .inTable(deviceTypeTableName)
      table.text('command')
      table.text('description')
      table.jsonb('metadata')
      table.timestamps()
    })
  }

  down() {
    this.drop(tableName)
  }
}

module.exports = DeviceTypeCommandSchema
