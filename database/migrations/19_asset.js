'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'assets'
const assetTypeTableName = 'asset_types'
const userTableName = 'users'

class AssetSchema extends Schema {
  up() {
    this.create(tableName, table => {
      table
        .uuid('id')
        .unique()
        .defaultTo(this.db.raw('public.gen_random_uuid()'))
      table
        .uuid('asset_type_id')
        .references('id')
        .inTable(assetTypeTableName)
      table
        .uuid('user_id')
        .references('id')
        .inTable(userTableName)
      table.text('name').notNullable()
      table.text('description')
      table.float('mileage')
      table.boolean('active').defaultTo(true)
      table.dateTime('activated_at').defaultTo(knex.fn.now())
      table.dateTime('deactivated_at')
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

module.exports = AssetSchema
