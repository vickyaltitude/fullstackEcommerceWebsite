import React,{useState} from 'react'
import cartContext from './cartContext'

const ContextProvider = ({children}) => {

    const [cartList,setCartList]= useState([])

    function addProductToCart(products){
        
        let checkIfAlready = cartList.findIndex(product => product.id === products.id)
        
    if (checkIfAlready !== -1) {
        const updatedCart = [...cartList];
        updatedCart[checkIfAlready].quantity += 1;
        setCartList(updatedCart);
        alert('Product quantity updated!');
      } else {
        setCartList(prevCart => [
          ...prevCart,
          {
            id: products.id,
            title: products.title,
            price: products.price,
            imageUrl: products.imageUrl,
            quantity: 1,
          },
        ]);
        alert('Product added to cart!');
      }
    }
   
    const sendValue = {
        
        cart: cartList,
        addToCart: addProductToCart
    }

  return (
    <cartContext.Provider  value={sendValue}>
        {children}
    </cartContext.Provider>
  )
}

export default ContextProvider