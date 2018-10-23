'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Driver extends Model {
  assets() {
    return this.manyThrough('App/Models/AssetDriver', 'assets')
  }
}

module.exports = Driver
