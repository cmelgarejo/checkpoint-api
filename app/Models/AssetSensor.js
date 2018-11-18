'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class AssetSensor extends Model {
  /**
   * Gets the records for this assetSensor
   *
   * @method records
   *
   * @return {Object}
   */
  records () {
    return this.hasMany('App/Models/AssetSensorRecord')
  }
}

module.exports = AssetSensor
