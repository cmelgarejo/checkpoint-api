'use strict'

// Related directly to user, an asset group should always be created 'DEFAULT' and when an asset is created, it should ALWAYS be assigned a group.

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'asset_groups'
const assetTableName = 'assets'
const userTableName = 'users'

class AssetGroupSchema extends Schema {
  up() {
    this.create(tableName, table => {
      table
        .uuid('id')
        .unique()
        .defaultTo(this.db.raw('public.gen_random_uuid()'))
      table
        .integer('user_id')
        .references('id')
        .inTable(userTableName)
      table.text('name')
      table
        .text('emails')
        .comment('By default these contacts will be notified of any activity')
      table
        .text('phones')
        .comment('By default these contacts will be notified of any activity')
      table.jsonb('metadata')
      table.boolean('active').defaultTo(true)
      table.dateTime('activated_at').defaultTo(knex.fn.now())
      table.dateTime('deactivated_at')
      table.timestamps()
    })
  }

  async down() {
    this.drop(tableName)
  }
}

module.exports = AssetGroupSchema
