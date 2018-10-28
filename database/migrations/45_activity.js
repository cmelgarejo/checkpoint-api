'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const tableName = 'activities'
class ActivitySchema extends Schema {
  up() {
    this.create(tableName, table => {
      table
        .uuid('id')
        .unique()
        .defaultTo(this.db.raw('public.gen_random_uuid()'))

      table.timestamps()
    })
  }

  async down() {
    this.drop(tableName)
  }
}

module.exports = ActivitySchema
