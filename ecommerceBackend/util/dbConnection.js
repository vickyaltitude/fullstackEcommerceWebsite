const mongoose = require('mongoose');

function connectToDB(){
   
 return mongoose.connect('mongodb://localhost:27017/sharpenerecomm')
    
 
}

module.exports = connectToDB