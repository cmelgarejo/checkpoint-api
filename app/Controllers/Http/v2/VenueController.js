'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

const Venue = use('App/Models/Venue')
const JsonApiRB = use('JsonApiRecordBrowser')

/**
 * Resourceful controller for interacting with venues
 */
class VenueController {
  /**
   * Show a list of all venues.
   * GET venues
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async index ({ auth, request, params }) {
    // if has permissions, show all venues
    const res = await JsonApiRB.model(Venue)
    return res
      .request(request.get()) // handle request
      .filter({ user_id: auth.user.id })
      .paginateOrFetch()
  }

  /**
   * Update venue details.
   * PUT or PATCH venues/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ request, params }) {
    const { id } = params
    const venue = await Venue.findOrFail(id)
    // const allowedParams = Venue.cleanParams(request.post())
    venue.merge({
      ...request.post()
    })
    const result = await venue.save()
    if (!result) {
      console.error(result)
      throw new Error('Could not be saved')
    }
    return venue
  }

  /**
   * Display a single venue.
   * GET venues/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async show ({ params }) {
    const { id } = params
    const venue = await Venue.findOrFail(id)
    return venue
  }

  /**
   * Delete a venue with id.
   * DELETE venues/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params }) {
    const { id } = params
    const venue = await Venue.findOrFail(id)
    venue.delete()
  }
}

module.exports = VenueController
