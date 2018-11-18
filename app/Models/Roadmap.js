'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Roadmap extends Model {
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
