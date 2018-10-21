'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class AssetDevice extends Model {
  assets() {
    return this.hasMany('App/Models/Asset')
  }

  devices() {
    return this.hasMany('App/Models/Device')
  }
}

module.exports = AssetDevice
