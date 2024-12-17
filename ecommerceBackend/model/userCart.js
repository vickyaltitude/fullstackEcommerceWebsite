const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userCart = new Schema({
    userEmail : {
        type: String,
        required: true
    },
    cartProduct :[
        {
         id: Number,
        title: String,
        price: Number,
        imageUrl: String,
        quantity: Number
        }
    ]
})

module.exports = mongoose.model('UserCart',userCart)