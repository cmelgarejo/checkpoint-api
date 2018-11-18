'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class AssetGeofence extends Model {
  /**
   * Gets the assets for this geofence
   *
   * @method assets
   *
   * @return {Object}
   */
  assets () {
    return this.hasMany('App/Models/Asset')
  }

  /**
   * Gets the geofences for this asset
   *
   * @method geofences
   *
   * @return {Object}
   */
  geofences () {
    return this.hasMany('App/Models/Geofence')
  }
}

module.exports = AssetGeofence
