'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class AssetEvent extends Model {
  /**
   * Gets the records for this assetEvent
   *
   * @method records
   *
   * @return {Object}
   */
  records () {
    return this.hasMany('App/Models/AssetEventRecord')
  }
}

module.exports = AssetEvent
