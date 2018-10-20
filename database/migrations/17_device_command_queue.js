'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'device_command_queues'
const deviceTableName = 'devices'

class DeviceCommandQueueSchema extends Schema {
  up() {
    this.create(tableName, table => {
      table.increments()
      table
        .integer('device_id')
        .references('id')
        .inTable(deviceTableName)
      table.text('command')
      table.boolean('sent').defaultTo(false)
      table.dateTime('sent_at')
      table.timestamps()
    })
  }

  down() {
    this.drop(tableName)
  }
}

module.exports = DeviceCommandQueueSchema