'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Asset extends Model {
  assetType() {
    return this.hasOne('App/Models/AssetType')
  }

  devices() {
    return this.manyThrough('App/Models/AssetDevice', 'devices')
  }

  drivers() {
    return this.manyThrough('App/Models/AssetDriver', 'drivers')
  }

  events() {
    return this.hasMany('App/Models/AssetEvent')
  }

  sensors() {
    return this.hasMany('App/Models/AssetSensor')
  }
}

module.exports = Asset
