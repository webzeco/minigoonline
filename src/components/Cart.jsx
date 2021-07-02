import React, { Component } from 'react'
const Cart = props => {
    return (
        <>
            <h1>Shoping Cart</h1>
            <p>This is Shoping Cart Component why is it not working</p>
        </>)
}
export default Cart;
const ShowProductList = props => {
    return (
        <>
            {props.product}
        </>
    )
}
