import React,{useState, useEffect} from 'react';
import {Container, Row, Col,Form, Button} from 'react-bootstrap'
import { useDispatch} from 'react-redux';
import { loginUser } from '../actions/userAction';

const Loginscreen = () => {
  const[email, setEmail]= useState('')
  const [password, setPassword]= useState('')
  const dispatch=useDispatch()

  useEffect(() => {
    if (localStorage.getItem('currentUser')) {
      window.location.href = "/";
    }
  }, []);
  const loginHandler=()=>{
    const user={email, password}
    dispatch(loginUser(user));
  }
  
  return (
    <>
    <Container>
    <br></br>
         <Form>
      <h2> NFT-Shop Login</h2>
  <Form.Group as={Row} className="mb-3" controlId="email">
    <Form.Label column sm={2}>
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email"  value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="password">
    <Form.Label column sm={2}>
      Password
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="password" placeholder="Password"
      value={password} onChange={(e)=> setPassword(e.target.value)} />
    </Col>
  </Form.Group>
  
  <Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 10, offset: 2 }}>
      <Button
      onClick={loginHandler}>Sign In</Button>
    </Col>
  </Form.Group>
</Form>
</Container>

    </>
  );
}

export default Loginscreen;
