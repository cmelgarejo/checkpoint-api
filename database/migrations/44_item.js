'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'items'

class ItemSchema extends Schema {
  up() {
    this.create(tableName, table => {
      table
        .uuid('id')
        .unique()
        .defaultTo(this.db.raw('public.gen_random_uuid()'))
      table.timestamps()
    })
  }

  down() {
    this.drop(tableName)
  }
}

module.exports = ItemSchema
