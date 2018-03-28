'use strict'

const Route = use('Route')

Route.get('/', 'MainController.index')
Route.get('vehicle/:vehicle', 'MainController.getVehicle')
