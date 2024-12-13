import React from 'react'

const cartContext = React.createContext({
    cart:[],
    addToCart:()=>{}
})
export default cartContext;