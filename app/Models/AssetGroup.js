'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class AssetGroup extends Model {
  /**
   * Gets the assets for this assetGroup
   *
   * @method assets
   *
   * @return {Object}
   */
  assets () {
    return this.manyThrough('App/Models/AssetGroupDetail', 'assets')
  }
}

module.exports = AssetGroup
