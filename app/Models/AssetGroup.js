'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class AssetGroup extends Model {
  static boot () {
    super.boot()

    /**
     * A hook to set de/activated time depending on the active status
     */
    this.addHook('beforeSave', 'ActivateHook.method')
    this.addTrait('@provider:Jsonable', [ 'images', 'metadata' ])
  }
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
