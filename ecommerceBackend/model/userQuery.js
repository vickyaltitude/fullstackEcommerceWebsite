const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userQuerySchema = new Schema({
     userName : {
        type: String,
        required: true
     },
     Email:{
        type:String,
        required: true
     },
     PhoneNumber:{
        type: Number,
        required: true
     }
})

module.exports = mongoose.model('UserQuery',userQuerySchema);