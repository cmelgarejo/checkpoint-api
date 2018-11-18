'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class AssetPosition extends Model {
  /**
   * Gets the asset for this position
   *
   * @method asset
   *
   * @return {Object}
   */
  asset () {
    return this.belongsTo('App/Models/Asset')
  }

  /**
   * Gets the device for this position
   *
   * @method device
   *
   * @return {Object}
   */
  device () {
    return this.belongsTo('App/Models/Device')
  }
}

module.exports = AssetPosition
