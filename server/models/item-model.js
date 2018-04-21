const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const itemSchema = new Schema({
    name : String,
    title : String,
    category : String,
    picture : String,
    price : Number,
    stock : Number
})

let Item = mongoose.model('Item', itemSchema)

module.exports = Item;