/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route')

Route.get('/', () => ({ up: true }))

/*
|--------------------------------------------------------------------------
| v2
|--------------------------------------------------------------------------
*/

/**
 * Auth signin routes
 */
Route.group(() => {
  Route.post('signin/refresh', 'UserController.refreshJWTKey')
  Route.post('signin', 'UserController.generateJWTKey')
  Route.post('apikey', 'UserController.generateAPIKey')
})
  .prefix('/v2/auth')
  .namespace('/v2')
  .middleware(['auth:basic'])

/**
 * Auth social routes
 */
Route.group(() => {
  Route.get('facebook', 'AuthController.facebook')
}).prefix('/v2/auth/social/authenticated').namespace('/v2')

Route.get('facebook', async ({ ally }) => {
  await ally.driver('facebook').redirect()
}).prefix('/v2/auth/social')

/**
 * Administrative routes
 */
Route.group(() => {
  // Users
  Route.resource('users', 'UserController').validator(
    new Map([[['users.store'], ['User']], [['users.update'], ['User']]])
  )
})
  .prefix('/v2')
  .namespace('/v2')
  .middleware(['jsonApi', 'auth:jwt,api', 'tokenMetrics', 'is: administrator'])

/**
 * Common user routes
 */
Route.group(() => {
  // Checking `me`
  Route.get('/auth/me', 'UserController.me')

  // Venues
  Route.resource('venues', 'VenueController').validator('StoreVenue')
})
  .prefix('/v2')
  .namespace('/v2')
  .middleware([
    'jsonApi',
    'auth:jwt,api',
    'tokenMetrics',
    'is: administrator or user'
  ])
