import React from 'react'
import { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';

export default function Payment() {
    const [product, setProduct] = useState({
        name:'React',
        price:10,
        productBy:"facebook"
    });
    const makePayment=token=>{
        const body={
            token,
            product
        }
        const headers={
            "Content-Type":"application/json",
            "x-token":localStorage.getItem('jwt')
        }
        return fetch(`${process.env.REACT_APP_URL}/api/v1/order/payment`,{
            method:"POST",
            headers,
            body:JSON.stringify(body)
        }).then(response=>{
            console.log("Response",response);
            console.log(response.status)
        }).catch(err=>{
            console.log("some error ocourse",err);
        })
    }
    return (
        <div>
            <StripeCheckout
             name={'Pay here for Order'} 
             amount={product.price*100}
             shippingAddress
             billingAddress
             token={makePayment}
              stripeKey={"pk_test_51IO5xAH14g63ENe8chwJLUGxwQpT0RbIIlYSLJoFFYbGgVi93iz8cmi0cXcjNZVQEAFgwq6YUtzkSlP0FPdBYlak00og3BdHSs"}  >
              
                <button className="btn-large pink">Buy react from $10</button>
            </StripeCheckout>
        </div>
    )
}
