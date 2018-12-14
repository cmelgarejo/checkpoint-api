'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class AssetSensor extends Model {
  static boot () {
    super.boot()

    /**
     * A hook to set de/activated time depending on the active status
     */
    this.addHook('beforeSave', 'ActivateHook.method')
    this.addTrait('@provider:Jsonable', [ 'images', 'metadata' ])
  }
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
