'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class AssetRecord extends Model {
  /**
   * Gets the asset for this recorded position
   *
   * @method asset
   *
   * @return {Object}
   */
  asset() {
    return this.belongsTo('App/Models/Asset')
  }

  /**
   * Gets the device for this recorded position
   *
   * @method device
   *
   * @return {Object}
   */
  device() {
    return this.belongsTo('App/Models/Device')
  }
}

module.exports = AssetRecord
