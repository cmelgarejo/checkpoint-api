'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DeviceTypeCommandSchema extends Schema {
  up () {
    this.create('device_type_commands', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('device_type_commands')
  }
}

module.exports = DeviceTypeCommandSchema
