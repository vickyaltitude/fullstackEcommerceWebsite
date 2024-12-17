import React,{useState,useEffect} from 'react'
import cartContext from './cartContext'
import { useNavigate } from 'react-router-dom'

const ContextProvider = ({children}) => {
    const navigate = useNavigate();
    const [cartList,setCartList]= useState([])
    const[userToken,setUserToken] = useState(null);

    function addProductToCart(products){
        
        let checkIfAlready = cartList.findIndex(product => product.id === products.id)
        
    if (checkIfAlready !== -1) {
        const updatedCart = [...cartList];
        updatedCart[checkIfAlready].quantity += 1;
        setCartList(updatedCart);
        alert('Product quantity updated!');
      } 
      else {
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

    function handleSetUserToken(UID){
      if(UID){
        setUserToken(UID)
        localStorage.setItem('userAuth',JSON.stringify(UID))
      }else{
        setUserToken(UID)
        localStorage.removeItem('userAuth')
        navigate('/auth')
      }
     
    }
   
    const sendValue = {
        
        cart: cartList,
        addToCart: addProductToCart,
        userToken: userToken,
        handleSetUserToken: handleSetUserToken
    }

    useEffect(()=>{

      setUserToken(()=>JSON.parse(localStorage.getItem('userAuth')) || null);
      
         let setLogout = setTimeout(()=>{
          setUserToken(null)
        localStorage.removeItem('userAuth')
        navigate('/auth')
      },10000)
      
  
      return ()=> clearTimeout(setLogout)

    },[userToken])

  return (
    <cartContext.Provider  value={sendValue}>
        {children}
    </cartContext.Provider>
  )
}

export default ContextProvider