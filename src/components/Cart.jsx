import React, {  useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getAllBaskets } from "../services/basketService";
import CartProduct from "./CartProduct";
import Basket from "./common/Basket";
import "./style/cart.css";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { addBucket, changeQuantity, getCart, removeItem } from "../storemini/reducers/cart";
const Cart = ( ) => {
  const history = useHistory();
  const [baskets, setBaskets] = useState([]);
  const [checkout, setCheckout] = useState(true);
  const dispatch = useDispatch();
  const cart = useSelector(getCart);

  const handleCheckout = () => {
    setCheckout(checkout ? false : true);
  };

  const handleBucket = (bucket) => {
    dispatch(addBucket(bucket));
  };

  const handleQuantityChanged = (e, id) => {
    dispatch(changeQuantity(id, e.target.value * 1));
  };
  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };
  useEffect(() => {
    getBasketsHandlers();
  }, []);
  const getBasketsHandlers = async () => {
    const { data } = await getAllBaskets();
    setBaskets(data.data);
  };
  const handleAgreement = (e) => {
    handleCheckout();
    if (e.target.checked) 
      document.getElementById("CheckoutAsGuestBtn").disabled = false;
     else 
      document.getElementById("CheckoutAsGuestBtn").disabled = true;
  };
  const goToShipping = () => {
    history.push("/shipping");
  };
  return (
    <>
      <div className="container mt-2 pb-5 ">
        <div className="row justify-content-center">
          <div className="col-12">
            <h1 className="shop-cart-h1 fw-bold mt-1">Shopping Cart</h1>
          </div>
        </div>
        <div className="ho mt-2 w-100"></div>
        {cart.list.map((data) => {
          return (
            <CartProduct
              key={data.product.id}
              qty={data.qty}
              productPrice={data.product.price}
              product={data.product}
              selectedVariants={data.selectedVariants}
              removeCartItem={handleRemoveItem}
              handleQuantityChange={(e, id) => handleQuantityChanged(e, id)}
            />
          )
        }
        )}
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 mt-4">
              <div className="row">
                <div className="col-lg-6">
                  <p className="message_look">
                    Include a special message for your recipient on the order
                    packing slip at no extra charge!
                  </p>
                  <textarea
                    rows="6"
                    cols="30"
                    id="specialMessage"
                    placeholder="Write a Messages..."
                  ></textarea>
                </div>
                <div className="col-lg-6">
                  <p className="message_look">
                    Message which you want to state on bucket
                  </p>
                  <textarea
                    rows="6"
                    cols="30"
                    id="specialMessage"
                    placeholder="Write a Message..."
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 mt-4">
              <h3 className="message_look fw-bold">Subtotal:{cart.subtotal}</h3>
              <p className="message_look">
                Shipping & taxes calculated at checkout
              </p>
              <div className="ho mt-1 mb-2 w-100"></div>
              <input
                id="agreementCheckBox"
                type="checkbox"
                onChange={handleAgreement}
              />
              <label for="agreementCheckBox" className="message_look">
                I agree to the Terms of Sale, Terms of Service, and Privacy
                Policy.
              </label>
              <button
                id="CheckoutBtn"
                onClick={goToShipping}
                className="btn btn-danger mb-3 mt-2 message_look fw-bold"
                disabled={checkout}
              >
                CheckOut
              </button>
              <br />
              <button
                id="CheckoutAsGuestBtn"
                className="btn btn-danger message_look fw-bold"
                disabled
              >
                CheckOut As Guest
              </button>
            </div>

            <h6 className="fw-bold mt-2">Choose the Bucket of your own choice</h6>

            {baskets?.map((bucket) => {
              return (
                <Basket
                  bucket={bucket}
                  handleBucket={handleBucket}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};


export default Cart;

  //This is just to assign values for first time
  // function assignValues(data) {
  //   const temp = {};
  //   temp.estimatedProcessingTime = data.estimatedProcessingTime;
  //   temp.selectedVariants = this.state.selectedVariants;
  //   temp.customWriting = this.state.customWriting;
  //   temp.customDate = this.state.customDate;
  //   temp.qty = 1;
  //   temp.product = data.product;
  //   temp.product = data.product;
  //   temp.qty = data.qty;
  //   temp.bucketPrice = 0;
  //   temp.basePrice = data.price;
  //   temp.productPrice = temp.basePrice * temp.qty; //This is for price shown for each product  quantity
  //   temp.totalProductPrice = temp.basePrice * temp.qty; //This is for whole product quantity *basePrice+bucketPrice
  //   return temp;
  // }