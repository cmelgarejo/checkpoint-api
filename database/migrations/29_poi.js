'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'pois'
const userTableName = 'users'

class PoiSchema extends Schema {
  up() {
    this.create(tableName, table => {
      table
        .uuid('id')
        .unique()
        .defaultTo(this.db.raw('public.gen_random_uuid()'))
      table
        .uuid('user_id')
        .references('id')
        .inTable(userTableName)
      table.text('name')
      table.text('description')
      table.integer('radius').comment('The detection radius of the POI')
      table.float('lat')
      table.float('lon')
      table
        .text('emails')
        .comment(
          'Optional: if this is set, it will only send the alert to \
          these contacts, otherwise will use what is set on AssetGroup',
        )
      table
        .text('phones')
        .comment(
          'Optional: if this is set, it will only send the alert to \
          these contacts, otherwise will use what is set on AssetGroup',
        )
      table.jsonb('metadata')
      table.boolean('shareable').defaultTo(false)
      table.boolean('active').defaultTo(true)
      table.timestamp('activated_at').defaultTo(this.fn.now())
      table.timestamp('deactivated_at')
      table.timestamps()
    })
  }

  down() {
    this.drop(tableName)
  }
}

module.exports = PoiSchema
