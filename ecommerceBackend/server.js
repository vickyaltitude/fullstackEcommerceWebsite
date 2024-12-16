const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080
const dbConnect = require('./util/dbConnection.js');

app.use(bodyParser.urlencoded({extended:true}));



dbConnect().then(res =>{
    console.log('db connected successfully')
    app.listen(PORT,()=> console.log(`Server is running on PORT ${PORT}`))
}).catch(err =>{
    console.log('error while connecting to db')
})

