'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DeviceTypeEventSchema extends Schema {
  up () {
    this.create('device_type_events', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('device_type_events')
  }
}

module.exports = DeviceTypeEventSchema
