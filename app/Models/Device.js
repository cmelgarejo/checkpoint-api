'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
class Device extends Model {
  /**
   * Gets the deviceType for this device
   *
   * @method deviceType
   *
   * @return {Object}
   */
  deviceType () {
    return this.hasOne('App/Models/DeviceType')
  }

  /**
   * Gets the user for this device
   *
   * @method user
   *
   * @return {Object}
   */
  user () {
    return this.belongsTo('App/Model/User')
  }

  /**
   * Gets the commandQueue for this device
   *
   * @method commandQueue
   *
   * @return {Object}
   */
  commandQueue () {
    return this.hasMany('App/Models/DeviceCommandQueue')
  }

  /**
   * Gets the simcards for this device
   *
   * @method simcards
   *
   * @return {Object}
   */
  simcards () {
    return this.hasMany('App/Models/Simcard')
  }

  /**
   * Gets the assets for this device
   *
   * @method assets
   *
   * @return {Object}
   */
  assets () {
    return this.manyThrough('App/Models/AssetDevice', 'assets')
  }
}

module.exports = Device
