import { Flight } from "../models/flight.js"
import { Meal } from "../models/meal.js"

function newFlight(req, res){
  res.render('flights/new', {
    title: "Add Flight"
  })
}

function create(req, res){
  
  const flight = new Flight(req.body)
  flight.save(function(err){
    if (err) return res.redirect('/flights/new')
    res.redirect(`/flights/${flight._id}`)
  })
}

function index(req, res){
  Flight.find({}, function (error, flights){
    res.render("flights/index",{
      error: error,
      flights: flights,
      title: 'All Flights',
    })
  })
}

function show(req, res){
  Flight.findById(req.params.id)
  .populate('meal')
  .exec(function(err, flight){
    Meal.find({_id: {$nin: flight.meal}}, function (err, meals) {
      res.render('flights/show', { title: 'Flight Detail', flight, meals })
    })
  })
}

function deleteFlight(req, res){
  Flight.findByIdAndDelete(req.params.id, function(err, flight){
    res.redirect('/flights')
  })
}

function createTicket(req, res){
  Flight.findById(req.params.id, function(err, flight){
  flight.tickets.push(req.body)
  flight.save(function(err){
    res.redirect(`/flights/${flight._id}`)
  })
})
}

function deleteTicket(req, res){
  Flight.findById(req.params.id, function(err, flight){
    flight.tickets.remove({_id:req.params.ticketId})
    flight.save(function(){
      res.redirect(`/flights/${flight._id}`)
    })
})
console.log('boop')
}

function addToMeals(req, res){
  Flight.findById(req.params.id, function(err, flight) {
    flight.meal.push(req.body.mealId)
    flight.save(function(err){
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

export {
  newFlight as new,
  create,
  index,
  show, 
  deleteFlight as delete,
  deleteTicket,
  createTicket,
  addToMeals
}