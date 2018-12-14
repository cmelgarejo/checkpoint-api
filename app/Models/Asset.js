'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
class Asset extends Model {
  static boot () {
    super.boot()

    /**
     * A hook to set de/activated time depending on the active status
     */
    this.addHook('beforeSave', 'ActivateHook.method')
    this.addTrait('@provider:Jsonable', [ 'images', 'metadata' ])
  }

  /**
   * Gets the asset type for this asset
   *
   * @method assetType
   *
   * @return {Object}
   */
  assetType () {
    return this.hasOne('App/Models/AssetType')
  }

  /**
   * Gets the devices for this asset
   *
   * @method devices
   *
   * @return {Object}
   */
  devices () {
    return this.manyThrough('App/Models/AssetDevice', 'devices')
  }

  /**
   * Gets the drivers for this asset
   *
   * @method drivers
   *
   * @return {Object}
   */
  drivers () {
    return this.manyThrough('App/Models/AssetDriver', 'drivers')
  }

  /**
   * Gets the events for this asset
   *
   * @method events
   *
   * @return {Object}
   */
  events () {
    return this.hasMany('App/Models/AssetEvent')
  }

  /**
   * Gets the sensors for this asset
   *
   * @method sensors
   *
   * @return {Object}
   */
  sensors () {
    return this.hasMany('App/Models/AssetSensor')
  }

  /**
   * Gets the geofences for this asset
   *
   * @method geofences
   *
   * @return {Object}
   */
  geofences () {
    return this.manyThrough('App/Models/AssetGeofence', 'geofences')
  }

  /**
   * Gets the pois for this asset
   *
   * @method pois
   *
   * @return {Object}
   */
  pois () {
    return this.manyThrough('App/Models/AssetPoi', 'pois')
  }

  /**
   * Gets the positions for this asset
   *
   * @method positions
   *
   * @return {Object}
   */
  positions () {
    return this.hasMany('App/Models/AssetPosition')
  }

  /**
   * Gets the records for this asset
   *
   * @method records
   *
   * @return {Object}
   */
  records () {
    return this.hasMany('App/Models/AssetRecord')
  }

  /**
   * Gets the roadmaps for this asset
   *
   * @method roadmaps
   *
   * @return {Object}
   */
  roadmaps () {
    return this.manyThrough('App/Models/AssetRoadmap', 'roadmaps')
  }
}

module.exports = Asset
