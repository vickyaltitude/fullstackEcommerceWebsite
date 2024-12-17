const express = require('express');
const router = express.Router();
const UserCart = require('../model/userCart');


router.post('/usercart',(req,res)=>{
    console.log(req.body)
   const newUserCart = new UserCart({
       userEmail: req.body.userEmail,
       cartProduct:[
        {
            id: req.body.setNewObj[0].id,
            title: req.body.setNewObj[0].title,
            price: req.body.setNewObj[0].price,
            imageUrl: req.body.setNewObj[0].imageUrl,
            quantity: req.body.setNewObj[0].quantity
        }
       ]
   })

   newUserCart.save().then(resp =>{
    res.json({msg:'usercart added successfully'})
   }).catch(err => console.log('error while adding usercart'));
   
})

router.post('/usercartupdate',(req,res)=>{
    console.log(req.body)

    UserCart.updateOne({userEmail: req.body.userEmail,'cartProduct.id': req.body.updatedCart[0].id},{$set:{'cartProduct.$.quantity' : req.body.updatedCart[0].quantity}}).then(resp =>{
        console.log(resp)
        res.json({msg:'cart updated successfully'})
    }).catch(err => console.log(err))
   
})


module.exports = router