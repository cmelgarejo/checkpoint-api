'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type  {import('moment')} */
const moment = use('moment')
class RoadmapPoint extends Model {
  static boot () {
    super.boot()

    /**
     * A hook to set de/activated time depending on the active status
     */
    this.addHook('beforeSave', async instance => {
      if (!instance.dirty.active) { instance.deactivated_at = moment() }
      if (instance.dirty.active) { instance.activated_at = moment() }
    })
  }
}

module.exports = RoadmapPoint
