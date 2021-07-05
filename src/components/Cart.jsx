import { omitBy } from 'lodash';
import React, { useEffect, useState } from 'react';
import "./style/cart.css";

const Cart = props => {
    const [priceIDArray, setPriceIDArray] = useState([]);
    const [subTotal, setsubTotal] = useState(0);
    const updateTotal = (priceID) => {
        setPriceIDArray(priceIDArray.map(
            (elem) => {
                if (elem.id === priceID.id) {
                    elem.price = priceID.price
                }
                return elem;
            }
        ));
    }
    useEffect(
        () => {
            setPriceIDArray(props.cartData.map(
                (elem) => {
                    const temp = {}
                    temp.id = elem.id;
                    temp.price = elem.price;
                    return temp;
                }
            )
            )
        }, []
    )
    useEffect(
        () => {
            let sum = 0;
            priceIDArray.map(
                (elem) => { sum += elem.price }
            )
            setsubTotal(sum);
        }, [priceIDArray]
    )
    const removeItem = (e) => {
        const priceID = {};
        priceID.id = Number(e.target.value);
        priceID.price = 0;
        updateTotal(priceID);
        props.removeItem(e);
    }
    const handleAgreement = (e) => {
        if (e.target.checked) {
            document.getElementById('Checkoutbtn').disabled = false;
            document.getElementById('CheckoutAsGuestbtn').disabled = false;
        } else {
            document.getElementById('Checkoutbtn').disabled = true;
            document.getElementById('CheckoutAsGuestbtn').disabled = true;
        }
    }
    const handleBucket = (e) => {
        const priceID = {};
        priceID.id = Number(e.target.id)
        priceID.price = (
            priceIDArray.map(elem => elem.id === e.target.id)[0].price
        )
        console.log(priceID)
        updateTotal(priceID)
    }
    return (
        <>
            <div className="container pt-5 mt-3 pb-5 font_fam">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h1 className="shop-cart-h1 fw-bold mt-4 pt-5">Shoping Cart</h1>
                    </div>
                </div>
                <div className="ho mt-2 w-100"></div>
                {
                    props.cartData.map(
                        (data) => <ShowCartProduct setPrice={updateTotal} removeItem={removeItem} data={data} />
                    )
                }
  <div className="container">
      <div className="row">
        <div className="col-lg-7 col-md-12">
            <div className="row">
            <div className="col-lg-12">
                <p>Include a special message for your recipient on the order packing slip at no extra charge!</p>
                <textarea rows='5' cols='30' id='specialMessage'></textarea>
                </div>
                <div className="col-lg-12 ">
                {
                    props.cartData.map(
                        (obj) => {
                            return <>
                            <div className="d-flex  ">
                                <input id={obj.id} type='checkbox' className="mt-1" value={obj.bucketPrice} onChange={handleBucket} />
                                <label className="px-2" for={obj.id}>Do you want bucket for product {obj.title} at price {obj.bucketPrice}
                                </label>
                                </div>
                            </>
                        }
                    )
                }
                </div>
                </div>
</div>
<div className="col-lg-5 col-md-12 ">
                <h3>Subtotal:{subTotal}</h3>
                <p>Shipping & taxes calculated at checkout</p>
                <input id='agreementCheckBox' type='checkbox' onChange={handleAgreement} />
                <label for='agreementCheckBox'>I agree to the Terms of Sale, Terms of Service, and Privacy Policy.
                </label>
                <button id='Checkoutbtn' className="btn btn-danger mb-3 mt-2" disabled>CheckOut</button>
                <br />
                <button id='CheckoutAsGuestbtn' className="btn btn-danger" disabled>CheckOut As Guest</button>
          
                </div>
</div>
</div>
            </div>
        </>
    )
}

const ShowCartProduct = props => {
    const [Quantity, setQuantity] = useState(1);
    const [Totalprice, setTotalPrice] = useState(props.data.price);
    const handleQuantityChange = (e) => {
        setQuantity(e.target.value)
        e.preventDefault();
    }
    useEffect(
        () => {
            setTotalPrice(props.data.price * Quantity);
        }, [Quantity]
    )

    useEffect(
        () => {
            const priceID = {};
            priceID.price = Totalprice;
            priceID.id = props.data.id;
            props.setPrice(priceID)
        }, [Totalprice]
    )

    const data = props.data;

    return (
        <>
            <div className="container font_fam">
                <div className="row justify-content-center">
                    <div className="col-lg-12 col-md-12 d-flex">
                        <div className="row">
                            <div className="col-lg-3 col-md-2 col-xs-4">
                                <img className="img-fluid img_back_col" height='80px' width='80px' src={data.img} alt='Product Image' />
                            </div>
                            <div className="col-lg-4 col-md-4 col-xs-12">
                                <div className="h5 pro_title_h5 pb-1">{data.title}</div>

                                {data.selectedVariants.map(
                                    (variant) => <>{variant.selectedVariant}/</>
                                )}
                                <p>Estimated Processing Time:</p>
                                <p>{data.estimatedProcessingTime}</p>
                            </div>

                            <div className="col-lg-5 col-md-6 col-xs-12 d-flex justify-content-between">
                                <input className="form-control mt-5 mb-5 w-25" value={Quantity} type='number' onChange={handleQuantityChange} />
                                <button type="button" className="btn btn-white text-center  " onClick={
                                    (e) => props.removeItem(e)}
                                    value={data.id}

                                >x Remove</button>
                                <div className="h5 pro_price_h5 mt-5 mb-5 mx-5">Rs. {Totalprice}</div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="ho mb-3 pt-3 w-75"></div>
            </div>
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