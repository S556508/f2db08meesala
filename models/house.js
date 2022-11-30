const mongoose = require("mongoose")
const houseSchema = mongoose.Schema({
house_Name: String,
house_Type: {
    type: String,
    minLength: 3,
    maxLength: 12
},
house_Cost: {
    type: Number,
    min: 3,
    max: 1000000
}
})
module.exports = mongoose.model("house",
houseSchema)