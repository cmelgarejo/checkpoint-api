'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AssetRecordSchema extends Schema {
  up () {
    this.create('asset_records', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('asset_records')
  }
}

module.exports = AssetRecordSchema
