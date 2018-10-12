'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Token extends Model {
  /**
   * A relationship on tokens metrics
   *
   * @method tokenMetrics
   *
   * @return {Object}
   */
  tokenMetrics() {
    return this.hasMany('App/Models/TokenMetric')
  }

  static get Serializer() {
    return 'JsonApi/Serializer/LucidSerializer'
  }
}

module.exports = Token
