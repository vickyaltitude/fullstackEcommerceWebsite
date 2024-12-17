import React from 'react'

const cartContext = React.createContext({
    cart:[],
    addToCart:()=>{},
    userToken:null,
    handleSetUserToken:()=>{},
    isLogin: false
})
export default cartContext;