'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DeviceTypeDatastringSchema extends Schema {
  up () {
    this.create('device_type_datastrings', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('device_type_datastrings')
  }
}

module.exports = DeviceTypeDatastringSchema
