'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'asset_sensors'
const assetTableName = 'assets'

class AssetSensorSchema extends Schema {
  up() {
    this.create(tableName, table => {
      table
        .uuid('id')
        .unique()
        .defaultTo(this.db.raw('public.gen_random_uuid()'))
      table
        .uuid('asset_id')
        .references('id')
        .inTable(assetTableName)
      table.text('name').notNullable()
      table.text('description').notNullable()
      table.boolean('active').defaultTo(true)
      table.jsonb('images')
      table.jsonb('metadata')
      table.timestamps()
    })
  }

  async down() {
    // await this.db.raw(`DROP TABLE IF EXISTS ${tableName} CASCADE;`) // this.drop(tableName)
    await this.db.raw(`DROP TABLE IF EXISTS ${tableName} CASCADE;`)
  }
}

module.exports = AssetSensorSchema
