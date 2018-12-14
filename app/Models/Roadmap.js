'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Roadmap extends Model {
  static boot () {
    super.boot()

    /**
     * A hook to set de/activated time depending on the active status
     */
    this.addHook('beforeSave', 'ActivateHook.method')
    this.addTrait('@provider:Jsonable', [ 'images', 'metadata' ])
  }
  /**
   * Gets the points for this roadmap
   *
   * @method points
   *
   * @return {Object}
   */
  points () {
    return this.hasMany('App/Models/RoadmapPoint')
  }
}

module.exports = Roadmap
