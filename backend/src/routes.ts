import { Router } from 'express'

import ScheduleController from './Controller/ScheduleController'

const routes = Router()

const scheduleController = new ScheduleController()

routes.post('/schedule', scheduleController.store)
routes.get('/schedule', scheduleController.index)
routes.put('/schedule/:id', scheduleController.update)
routes.delete('/schedule/:id', scheduleController.destroy)

export default routes