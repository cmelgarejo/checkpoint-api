'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class AssetPoi extends Model {
  /**
   * Gets the assets for this poi
   *
   * @method assets
   *
   * @return {Object}
   */
  assets () {
    return this.hasMany('App/Models/Asset')
  }

  /**
   * Gets the pois for this asset
   *
   * @method pois
   *
   * @return {Object}
   */
  pois () {
    return this.hasMany('App/Models/Poi')
  }
}

module.exports = AssetPoi
