/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.get('/', () => ({ up: true }))

/*
|--------------------------------------------------------------------------
| v1
|--------------------------------------------------------------------------
*/
Route.group(() => {
  // Route.post('users/token/refresh', 'UserController.refreshJWTKey')
  Route.post('users/token', 'UserController.generateJWTKey')
  Route.post('users/apikey', 'UserController.generateAPIKey')
})
  .prefix('/v1')
  .namespace('/v1')
  .middleware(['auth:basic'])

Route.group(() => {
  // Users
  Route.resource('users', 'UserController').validator(
    new Map([[['users.store'], ['User']], [['users.update'], ['User']]])
  )
})
  .prefix('/v1')
  .namespace('/v1')
  .middleware(['auth:jwt,api', 'tokenMetrics', 'jsonApi'])
