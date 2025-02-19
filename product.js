const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number,
    city : String,
    MoNo : Number,
})

 module.exports =  mongoose.model("product", productSchema)