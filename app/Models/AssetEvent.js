'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class AssetEvent extends Model {
  records() {
    return this.hasMany('App/Models/AssetEventRecord')
  }
}

module.exports = AssetEvent
