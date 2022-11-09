const mongoose = require("mongoose")
const houseSchema = mongoose.Schema({
house_Name: String,
house_Type: String,
house_Cost: Number
})
module.exports = mongoose.model("house",
houseSchema)