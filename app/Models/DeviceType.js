'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class DeviceType extends Model {
  /**
   * Gets the dataStrings for this device type
   *
   * @method dataStrings
   *
   * @return {Object}
   */
  dataStrings () {
    return this.hasMany('App/Models/DeviceTypeDatastring')
  }

  /**
   * Gets the commands for this device type
   *
   * @method commands
   *
   * @return {Object}
   */
  commands () {
    return this.hasMany('App/Models/DeviceTypeCommand')
  }

  /**
   * Gets the events for this device type
   *
   * @method events
   *
   * @return {Object}
   */
  events () {
    return this.hasMany('App/Models/DeviceTypeEvent')
  }

  /**
   * Gets the sensors for this device type
   *
   * @method sensors
   *
   * @return {Object}
   */
  sensors () {
    return this.hasMany('App/Models/DeviceTypeSensor')
  }
}

module.exports = DeviceType
