'use strict'
/** @type  {import('moment')} */
const moment = use('moment')

const ActivateHook = exports = module.exports = {}

ActivateHook.method = async (modelInstance) => {
  if (!modelInstance.dirty.active) {
    modelInstance.deactivated_at = moment().format('YYYY-MM-DD HH:mm:ss')
    modelInstance.activated_at = null
  }
  if (modelInstance.dirty.active) {
    modelInstance.activated_at = moment().format('YYYY-MM-DD HH:mm:ss')
    modelInstance.deactivated_at = null
  }
}
