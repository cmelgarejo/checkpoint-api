'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DeviceSensorTypeSchema extends Schema {
  up () {
    this.create('device_sensor_types', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('device_sensor_types')
  }
}

module.exports = DeviceSensorTypeSchema
