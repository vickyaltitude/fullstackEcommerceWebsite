const express = require('express');
const router = express.Router();
const UserCart = require('../model/userCart');


router.post('/usercart',(req,res)=>{

    console.log(req.body)

   UserCart.findOneAndUpdate(
    { userEmail: req.body.userEmail }, 
    { 
        $set: { 
            userEmail: req.body.userEmail,
            cartProduct:[...req.body.setNewObj
            ]
         }
    },
    { 
        new: true,  
        upsert: true 
    }).then(resp =>{
    res.json({msg:'usercart added successfully'})
   }).catch(err => console.log('error while adding usercart',err));
   
})

router.post('/usercartupdate',(req,res)=>{
    console.log(req.body)

    UserCart.updateOne({userEmail: req.body.userEmail,'cartProduct.id': req.body.updatedCart[0].id},{$set:{'cartProduct.$.quantity' : req.body.updatedCart[0].quantity}}).then(resp =>{
        console.log(resp)
        res.json({msg:'cart updated successfully'})
    }).catch(err => console.log(err))
   
})

router.get('/getusercart',(req,res)=>{
    console.log(req.headers.useremail)
    UserCart.findOne({userEmail: req.headers.useremail}).then(resp =>{
        console.log(resp)
        res.json({data:resp.cartProduct})
    }).catch(err => console.log(err))
    
})


module.exports = router