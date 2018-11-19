'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Venue extends Model {
  static get Serializer () {
    return 'JsonApi/Serializer/LucidSerializer' // Override Lucid/VanillaSerializer
  }
}

module.exports = Venue
