'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class AssetGroupDetail extends Model {
  assets() {
    return this.hasMany('App/Models/Asset')
  }
}

module.exports = AssetGroupDetail
