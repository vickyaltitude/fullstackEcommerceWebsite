const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080
const cors = require('cors');
const dbConnect = require('./util/dbConnection.js');

const userQuery = require('./routes/userQuery.js');
const userCart = require('./routes/userCart.js');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json()); 
app.use(express.json());


app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true
}));


app.use(userQuery)

app.use(userCart)

dbConnect().then(res =>{
    console.log('db connected successfully')
    app.listen(PORT,()=> console.log(`Server is running on PORT ${PORT}`))
}).catch(err =>{
    console.log('error while connecting to db')
})

