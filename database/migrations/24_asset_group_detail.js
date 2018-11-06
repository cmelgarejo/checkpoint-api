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
        .uuid('asset_id')
        .references('id')
        .inTable(assetGroupTableName)
      table
        .text('emails')
        .comment('The contacts that will be notified of any activity')
      table
        .text('phones')
        .comment('The contacts that will be notified of any activity')
      table.jsonb('metadata')
      table.timestamps()
    })
  }

  down() {
    this.drop(tableName)
  }
}

module.exports = AssetGroupDetailSchema
