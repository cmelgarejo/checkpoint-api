'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
class Device extends Model {
  deviceType() {
    return this.hasOne('App/Models/DeviceType')
  }

  user() {
    return this.belongsTo('App/Model/User')
  }

  commandQueue() {
    return this.hasMany('App/Models/DeviceCommandQueue')
  }

  simcards() {
    return this.hasMany('App/Models/Simcard')
  }
}

module.exports = Device
