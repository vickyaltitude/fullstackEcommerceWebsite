import React,{useState,useEffect} from 'react'
import cartContext from './cartContext'
import { useNavigate } from 'react-router-dom'
import apiRequest from '../apiRequest'

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

        let optionObj = {
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify({updatedCart,userEmail:localStorage.getItem('userEmail')})
        }
  
        apiRequest('http://localhost:8080/usercartupdate',optionObj).then(resp =>{
          return  resp
        }).then(resp =>{
            console.log(resp)
          }).catch(err => console.log(err))
       


      } 
      else {
        let setNewObj = [...cartList,{
          id: products.id,
          title: products.title,
          price: products.price,
          imageUrl: products.imageUrl,
          quantity: 1,
        }]
        setCartList(prevCart => setNewObj);

        alert('Product added to cart!');

        let optionObj = {
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify({setNewObj,userEmail:localStorage.getItem('userEmail')})
        }

        apiRequest('http://localhost:8080/usercart',optionObj).then(resp =>{

          return  resp

        }).then(resp =>{
            console.log(resp)
          }).catch(err => console.log(err))

      }

    }

    function handleSetUserToken(UID,email){
      if(UID){
        setUserToken(UID)
        localStorage.setItem('userAuth',JSON.stringify(UID))
        localStorage.setItem('userEmail',email)
      }else{
        setUserToken(UID)
        localStorage.removeItem('userAuth')
        localStorage.setItem('userEmail')
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
      },600000)
      
  
      return ()=> clearTimeout(setLogout)

    },[userToken])

  return (
    <cartContext.Provider  value={sendValue}>
        {children}
    </cartContext.Provider>
  )
}

export default ContextProvider