const mongoose = require("mongoose")
const mercedes_benzSchema = mongoose.Schema({
    mercedes_benz_luxurious_name: {
        type:String,
        required :true
    },
    mercedes_benz_tire_size: {
        type:Number,
        min:5,max:500
    },
    mercedes_benz_High_Beam_type: {
        type:String,
        required:true
    }
})
module.exports = mongoose.model("mercedes_benz",mercedes_benzSchema)