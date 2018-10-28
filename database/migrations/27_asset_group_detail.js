'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'asset_group_details'
const assetGroupTableName = 'asset_groups'

class AssetGroupDetailSchema extends Schema {
  up() {
    this.create(tableName, table => {
      table.increments()
      table
        .integer('asset_id')
        .references('id')
        .inTable(assetGroupTableName)
      table.text('emails')
      table.text('phones')
      table.jsonb('metadata')
      table.timestamps()
    })
  }

  down() {
    this.drop(tableName)
  }
}

module.exports = AssetGroupDetailSchema
