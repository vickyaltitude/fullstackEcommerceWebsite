import React,{useContext} from 'react'
import {Table,Modal,Button,Image} from 'react-bootstrap'
import cartContext from '../../store/cartContext'

const CartModal = ({onHandleCartClose,showCart}) => {

    const cartCtx = useContext(cartContext);

  return (
    <>
        {/* Cart Modal Component */}
      <Modal show={showCart} onHide={onHandleCartClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table responsive bordered hover>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartCtx.cart.map((item) => (
                <tr key={item.id}>
                    
                  <td>   <Image
                    src={item.imageUrl}
                    alt= {"image" + item.id}
                    fluid
                    rounded
                    style={{ border: "2px solid #ccc" }}
                    height='50px'
                    width='50px'
                  /> {item.title}
                  
                  </td>
                  
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="text-end mt-3">
            <h5>Total Amount: ${cartCtx.cart.reduce((mis,curr)=>{return Number(mis)+Number(curr.price*curr.quantity)},0)}</h5>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHandleCartClose}>
            Close
          </Button>
          <Button variant="primary">Proceed to Checkout</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CartModal