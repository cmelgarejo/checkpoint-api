'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class AssetDevice extends Model {
  /**
   * Gets the assets for this device
   *
   * @method assets
   *
   * @return {Object}
   */
  assets () {
    return this.hasMany('App/Models/Asset')
  }

  /**
   * Gets the devices for this asset
   *
   * @method devices
   *
   * @return {Object}
   */
  devices () {
    return this.hasMany('App/Models/Device')
  }
}

module.exports = AssetDevice
