'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'asset'

class AssetSchema extends Schema {
  async up() {
    this.create('assets', table => {
      table
        .uuid('id')
        .unique()
        .defaultTo(this.db.raw('public.gen_random_uuid()'))
      table.text('name').notNullable()

      table.timestamps()
    })
  }

  async down() {
    // this.drop('assets')
    await this.db.raw(`DROP TABLE IF EXISTS ${tableName} CASCADE;`)
  }
}

module.exports = AssetSchema
