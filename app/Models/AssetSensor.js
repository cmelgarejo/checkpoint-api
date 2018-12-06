'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type  {import('moment')} */
const moment = use('moment')
class AssetSensor extends Model {
  static boot () {
    super.boot()

    /**
     * A hook to set de/activated time depending on the active status
     */
    this.addHook('beforeSave', async instance => {
      if (!instance.dirty.active) {
        instance.deactivated_at = moment()
        instance.activated_at = null
      }
      if (instance.dirty.active) {
        instance.activated_at = moment()
        instance.deactivated_at = null
      }
    })
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
