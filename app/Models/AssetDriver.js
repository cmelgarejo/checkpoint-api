'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class AssetDriver extends Model {
  /**
   * Gets the asset for this driver
   *
   * @method asset
   *
   * @return {Object}
   */
  assets () {
    return this.hasMany('App/Models/Asset')
  }

  /**
   * Gets the driver for this asset
   *
   * @method driver
   *
   * @return {Object}
   */
  drivers () {
    return this.hasMany('App/Models/Driver')
  }
}

module.exports = AssetDriver
