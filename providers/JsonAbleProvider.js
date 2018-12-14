'use strict'

/** @typedef {import('@adonisjs/framework/src/Config')} Response */

const { ServiceProvider } = require('@adonisjs/fold')

class JsonAbleProvider extends ServiceProvider {
  /**
   * Register namespaces to the IoC container
   *
   * @method register
   *
   * @return {void}
   */
  register () {
    const Jsonable = require('../app/Models/Traits/Jsonable')
    this.app.bind('Adonis/Traits/Jsonable', () => new Jsonable())
    this.app.alias('Adonis/Traits/Jsonable', 'Jsonable')
  }

  /**
   * Attach context getter when all providers have
   * been registered
   *
   * @method boot
   *
   * @return {void}
   */
  boot () {
    //
  }
}

module.exports = JsonAbleProvider
