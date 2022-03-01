import mongoose from "mongoose";

const Schema = mongoose.Schema

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
    requiredBetween: [10, 9999]
  },
  departs: {
    type: Date,
    default: Date.now() + 365*24*60*60000,
  },
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}