import React,{useState} from 'react';
import {Container, Row, Col,Form, Button} from 'react-bootstrap'
import {useSelector, useDispatch} from 'react-redux';
import {registerUser} from '../actions/userAction';
import Success from '../components/Success';
import Loader from '../components/Loader';
import Error from '../components/Error';

const Registerscreen = () => {
  const [name, setName]= useState('')
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')
  const [confirmPassword, setConfirmPassword]= useState('')

  const registerState = useSelector((state) => state.registerUserReducer);
  const { error, success, loading } = registerState;

  
  const dispatch=useDispatch();

  //function for sign up buttom
  const regsiterhandler=() =>{
    if (password !== confirmPassword){
      alert('Password do not match! Please try again')
    } else{
      const user= {name, email, password, confirmPassword};
      dispatch(registerUser(user));
    }
  }
  return (
    <>
    <Container>
      {loading && <Loader/>}
      {success && <Success success="User Registeration Success"/>}
      {error && <Error error="Something gone wrong, Pleas Try again!"/>}
    <br></br>
    <Form>
         <h2>NFT-Shop Registeration</h2>
         <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
    <Form.Label column sm={2}>
      Name
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" placeholder="Enter Your Full Name"
      value={name}
      onChange={e=>setName(e.target.value)} />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email" placeholder="Email"
       value={email}
       onChange={e=>setEmail(e.target.value)} />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Password
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="password" placeholder="Password"
      value={password}
      onChange={e=>setPassword(e.target.value)} />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalConfirmPassword">
    <Form.Label column sm={2}>
       Confirm Password
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="password" placeholder=" Confirm Password"
      value={confirmPassword}
      onChange={e=>setConfirmPassword(e.target.value)} />
    </Col>
  </Form.Group>
  
  <Form.Group as={Row} className="mb-3" >
    <Col sm={{ span: 10, offset: 2 }}>
      <Button 
      onClick={regsiterhandler}
      >Sign Up</Button>
    </Col>
  </Form.Group>
</Form>
   
</Container>
    </>
  );
}

export default Registerscreen;
