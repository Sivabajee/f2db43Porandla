const mongoose = require("mongoose")
const mercedes_benzSchema = mongoose.Schema({
    mercedes_benz_luxurious_name: String,
    mercedes_benz_tire_size: Number,
    mercedes_benz_High_Beam_type: String
})
module.exports = mongoose.model("mercedes_benz",mercedes_benzSchema)