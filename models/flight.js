import mongoose from "mongoose";

const Schema = mongoose.Schema

const ticketSchema = new Schema({})

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ["American", "United", "Southwest"],
    default: ""
  },
  airport: {
    type: String,
    enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
    default: "DEN"
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999
  },
  departs: {
    type: Date,
    default: Date.now() + 365*24*60*60000,
  },
  tickets:{
    type: [ticketSchema]
  },
})

const Flight = mongoose.model('Flight', flightSchema)

function future(){
  const now = new Date()
  const oneYear = now.getFullYear()+1
}
future()

export {
  Flight
}