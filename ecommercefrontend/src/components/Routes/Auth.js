import React, { useState,useContext } from 'react';
import cartContext from '../../store/cartContext';
import { Button, Form, Container, Card, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const cartCtx = useContext(cartContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please fill both the fields')
      return
    } else {
      setError('');
      
      
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCJP-QToDvSItqm9P5mPuAG1s3xI6CwdDQ',{
        method: 'POST',
        body: JSON.stringify({email:email,password:password,returnSecureToken:true}),
        headers:{
          'Content-Type' : 'application/json'
        }
      }).then(resp =>{
    
         if(resp.ok){
           resp.json().then(resp => cartCtx.handleSetUserToken(resp.idToken,email))

           setError(null)
           navigate('/store')

         }else{
              resp.json().then(resp =>{
                console.log(resp.error.message)
                setError(resp.error.message)
              })
              
         }
       })
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Card style={{ width: '100%', maxWidth: '400px' }} className="shadow-sm">
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          
         
          {error && <Alert variant="danger">{error}</Alert>}
          
          <Form onSubmit={handleSubmit}>
         
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <br/>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <br/>
            <br/>
          
            <Button variant="primary" type="submit" className="w-100">
              Log In
            </Button>
          </Form>

        </Card.Body>
      </Card>
    </Container>
  );
}

export default Auth;
