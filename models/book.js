const mongoose = require("mongoose")

const bookSchema  = new mongoose.Schema({
    title:String,
    price:Number,
    author:String,
    image:String
})

module.exports = mongoose.model("Book",bookSchema)