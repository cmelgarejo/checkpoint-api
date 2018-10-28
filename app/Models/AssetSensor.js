'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class AssetSensor extends Model {
  records() {
    return this.hasMany('App/Models/AssetSensorRecord')
  }
}

module.exports = AssetSensor
