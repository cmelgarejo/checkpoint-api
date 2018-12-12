'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'device_type_events'
const deviceTypeTableName = 'device_types'

class DeviceTypeEventSchema extends Schema {
  up () {
    this.create(tableName, table => {
      table.increments()
      table
        .integer('device_type_id')
        .references('id')
        .inTable(deviceTypeTableName)
      table.text('event_code')
      table.text('description')
      table.jsonb('metadata')
      table.timestamps(true, true)
    })
  }

  down () {
    this.drop(tableName)
  }
}

module.exports = DeviceTypeEventSchema
