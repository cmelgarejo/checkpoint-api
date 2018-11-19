'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Venue extends Model {
  static get Serializer () {
    return 'JsonApi/Serializer/LucidSerializer' // Override Lucid/VanillaSerializer
  }

  static get hidden () {
    return ['user_id']
  }

  static get traits () {
    return [
      'CleanParams'
    ]
  }
}

module.exports = Venue
