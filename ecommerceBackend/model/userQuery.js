const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userQuerySchema = new Schema({
    userName : {
        type: String,
        required: true
     },
     userEmail:{
        type:String,
        required: true
     },
     userPhone:{
        type: Number,
        required: true
     }
})

module.exports = mongoose.model('UserQuery',userQuerySchema);