'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Driver extends Model {
  static boot () {
    super.boot()

    /**
     * A hook to set de/activated time depending on the active status
     */
    this.addHook('beforeSave', 'ActivateHook.method')
    this.addTrait('@provider:Jsonable', [ 'images', 'metadata' ])
  }
  /**
   * Gets the assets for this driver
   *
   * @method assets
   *
   * @return {Object}
   */
  assets () {
    return this.manyThrough('App/Models/AssetDriver', 'assets')
  }
}

module.exports = Driver
