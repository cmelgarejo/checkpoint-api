'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class AssetGroupDetail extends Model {
  /**
   * Gets the assets for this assetGroupDetail
   *
   * @method assets
   *
   * @return {Object}
   */
  assets() {
    return this.hasMany('App/Models/Asset')
  }
}

module.exports = AssetGroupDetail
