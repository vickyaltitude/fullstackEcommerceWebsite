const express= require('express');
const router = express.Router();
const UserQuery = require('../model/userQuery');


router.post('/userquery',(req,res)=>{
    console.log(req.body)
  
    const newUserQuery = new UserQuery({
        userName: req.body.name,
        userEmail: req.body.email,
        userPhone: Number(req.body.phone)
    })
    newUserQuery.save().then(resp =>{
        res.json({msg:'user Details saved successfully',success:true})
    }).catch(err =>{
        console.log(err)
    })
})

module.exports = router;