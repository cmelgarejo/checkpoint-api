'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DeviceSimcardSchema extends Schema {
  up () {
    this.create('device_simcards', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('device_simcards')
  }
}

module.exports = DeviceSimcardSchema
