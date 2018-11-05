'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class AssetRoadmap extends Model {
  /**
   * Gets the assets for this roadmap
   *
   * @method assets
   *
   * @return {Object}
   */
  assets() {
    return this.hasMany('App/Models/Asset')
  }

  /**
   * Gets the roadmaps for this asset
   *
   * @method roadmaps
   *
   * @return {Object}
   */
  roadmaps() {
    return this.hasMany('App/Models/Roadmap')
  }
}

module.exports = AssetRoadmap
