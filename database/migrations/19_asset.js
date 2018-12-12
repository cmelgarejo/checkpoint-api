'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'assets'
const assetTypeTableName = 'asset_types'
const userTableName = 'users'

class AssetSchema extends Schema {
  up () {
    this.create(tableName, table => {
      table
        .uuid('id')
        .unique()
        .defaultTo(this.db.raw('public.gen_random_uuid()'))
      table
        .integer('asset_type_id')
        .references('id')
        .inTable(assetTypeTableName)
      table
        .uuid('user_id')
        .references('id')
        .inTable(userTableName)
      table.text('name').notNullable()
      table.text('description')
      table.decimal('mileage', null).defaultTo(0)
      table.boolean('active').defaultTo(true)
      table.timestamp('activated_at').defaultTo(this.fn.now())
      table.timestamp('deactivated_at')
      table.jsonb('images')
      table.jsonb('metadata')
      table.timestamps(true, true)
      table.index('user_id')
    })
  }

  async down () {
    // await this.db.raw(`DROP TABLE IF EXISTS ${tableName} CASCADE;`) // this.drop(tableName)
    await this.db.raw(`DROP TABLE IF EXISTS ${tableName} CASCADE;`)
  }
}

module.exports = AssetSchema
