import React from 'react'

const cartContext = React.createContext({
    cart:[],
    addToCart:()=>{},
    userToken:null,
    handleSetUserToken:()=>{}
})
export default cartContext;