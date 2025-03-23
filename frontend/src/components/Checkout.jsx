import React from 'react';
import StripeCheckout from 'react-stripe-checkout'
import {Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import {placeOrder} from '../actions/orderAction'
import Loader from './Loader';
import Error from './Error';
import Success from "./Success";



const Checkout = ({ subTotal }) => {
  const orderState=useSelector((state)=>state.placeOrderReducer)
  const{loading, error, success}=orderState
  const dispatch=useDispatch()
  const tokenHandler= (token) => {
    dispatch(placeOrder(token, subTotal));
     console.log(token);
  }
  return (
    <>
  {loading && <Loader/>}
  {error && <Error error="Something is Wrong, Please Try Once!"/>}
  {success && <Success success="Your Order Placed Successfully"/>}

  <StripeCheckout 
   amount={subTotal *100}
   shippingAddress token={tokenHandler}
   stripeKey="pk_test_51KPN6ECo4awuwiK6zpkB5oKvEOziLGm2ChNehrSkZJg01xkxcbaWRv86ZtkOzNYtfVgd8cg4gjyBgp2oUkj5WTqi00E41JOcr7"
   currency="USD">

  <Button>Pay</Button>
  </StripeCheckout>
  </>
  );
};

export default Checkout;
