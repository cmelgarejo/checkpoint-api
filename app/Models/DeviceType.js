'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class DeviceType extends Model {
  dataStrings() {
    return this.hasMany('App/Models/DeviceTypeDatastring')
  }

  commands() {
    return this.hasMany('App/Models/DeviceTypeCommand')
  }
}

module.exports = DeviceType
