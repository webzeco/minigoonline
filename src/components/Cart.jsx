import { multiply } from 'lodash';
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


    const handleAgreement = (e) => {
        if (e.target.checked) {
            document.getElementById('Checkoutbtn').disabled = false;
            document.getElementById('CheckoutAsGuestbtn').disabled = false;
        } else {
            document.getElementById('Checkoutbtn').disabled = true;
            document.getElementById('CheckoutAsGuestbtn').disabled = true;
        }
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
                        (data) => <ShowCartProduct setPrice={updateTotal} removeItem={(e) => props.removeItem(e)} data={data} />
                    )
                }

                <p>Include a special message for your recipient on the order packing slip at no extra charge!</p>
                <textarea rows='4' cols='10' id='specialMessage'></textarea>

                <h3>Subtotal:{subTotal}</h3>
                <p>Shipping & taxes calculated at checkout</p>
                <input id='agreementCheckBox' type='checkbox' onChange={handleAgreement} />
                <label for='agreementCheckBox'>I agree to the Terms of Sale, Terms of Service, and Privacy Policy.
                </label>
                <button id='Checkoutbtn' disabled>CheckOut</button>
                <button id='CheckoutAsGuestbtn' disabled>CheckOut As Guest</button>


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
                                    (id) => props.removeItem(id)}
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