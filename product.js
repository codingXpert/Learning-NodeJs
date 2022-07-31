//Here we define Schemas and Models

const mongoose = require('mongoose');

//Schema
const productSchema = new mongoose.Schema({
    name:String,
    brand:String,
    price:Number,
    category:String
});

//Model
module.exports = mongoose.model('products' , productSchema);
// **********************************