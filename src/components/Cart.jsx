import { multiply } from 'lodash';
import React, { useState } from 'react';

const Cart = props => {

    return (
        <>
            <h2 style={{ margin: '200px' }}>Shoping Cart</h2>
            {
                props.cartData.map(
                    (data) => <ShowCartProduct removeItem={(id) => props.removeItem(id)} data={data} />
                )
            }
        </>
    )
}

const ShowCartProduct = props => {
    const [Quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(props.data.price);
    const handleQuantityChange = (e) => {
        setQuantity(e.target.value)
        setPrice(price * Quantity);
        e.preventDefault();
    }
    React.useEffect(
        () => { console.log(price) }, [Quantity]
    )
    const data = props.data;

    return (
        <>
            <img src={data.img} alt='Product Image' height='200px' width='200px' />
            <h2>{data.title}</h2>
            {data.selectedVariants.map(
                (variant) => <>{variant.selectedVariant}/</>
            )}
            <p>Estimated Processing Time: {data.estimatedProcessingTime}</p>
            <button onClick={
                (id) => props.removeItem(id)}
                value={data.id}

            >Remove</button>
            <label>Quantity</label>
            <input value={Quantity} type='number' onChange={handleQuantityChange} />
            <p>Price: {price} </p>
        </>
    )
}


export default Cart;

// customWriting: ""
// date: null
// estimatedProcessingTime: undefined
// price: 30
// selectedVariants: Array(2)
// 0:
// selectedVariant: "SM"
// variantType: "Size"
// __proto__: Object
// 1:
// selectedVariant: "Cyan / Aqua"
// variantType: "Color"