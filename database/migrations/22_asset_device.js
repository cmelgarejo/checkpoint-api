'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AssetDeviceSchema extends Schema {
  up () {
    this.create('asset_devices', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('asset_devices')
  }
}

module.exports = AssetDeviceSchema
