'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class AssetDriver extends Model {
  assets() {
    return this.hasMany('App/Models/Asset')
  }

  drivers() {
    return this.hasMany('App/Models/Driver')
  }
}

module.exports = AssetDriver
