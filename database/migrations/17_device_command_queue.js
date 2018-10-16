'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DeviceCommandQueueSchema extends Schema {
  up () {
    this.create('device_command_queues', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('device_command_queues')
  }
}

module.exports = DeviceCommandQueueSchema
