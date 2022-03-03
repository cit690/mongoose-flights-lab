import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

router.get("/", flightsCtrl.index)

router.get('/new', flightsCtrl.new)

router.post('/', flightsCtrl.create)

router.get('/:id', flightsCtrl.show)

router.post('/:id/tickets', flightsCtrl.createTicket)

router.post('/:id/meals', flightsCtrl.addToMeals)

router.delete("/:id", flightsCtrl.delete)

router.delete("/:id/tickets/:ticketId", flightsCtrl.deleteTicket)


export {
  router
}
