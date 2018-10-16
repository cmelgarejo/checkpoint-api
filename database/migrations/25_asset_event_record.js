'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AssetEventRecordSchema extends Schema {
  up () {
    this.create('asset_event_records', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('asset_event_records')
  }
}

module.exports = AssetEventRecordSchema
