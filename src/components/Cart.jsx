import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getAllBaskets } from "../services/basketService";
import Basket from "./common/Basket";
import { OrderContext } from "./contexts/OrderContext";
import "./style/cart.css";
const Cart = (props) => {
  const { order, orderHandler } = useContext(OrderContext);
  const history = useHistory();
  const [Data, setData] = useState([]); //This will have all products Data and Prices
  const [Total, setTotal] = useState(0);
  const [baskets, setBaskets] = useState([]);
  const [checkout, setCheckout] = useState(true);
  const [buckerPrice, setBucketPrice] = useState(0);
  //This will have total price
  //This will have total price
  const handleCheckout = () => {
    setCheckout(checkout ? false : true);
  };

  //This function will update the totalPrice after every change in prices will check if bucket is checked or not
  const updateTotalPrice = () => {
    let sum = 0;
    setData(
      Data.map((data) => {
        data.totalProductPrice = data.basePrice * data.quantity;
        data.productPrice = data.basePrice * data.quantity;
        sum += data.totalProductPrice;
        return data;
      })
    );
    setTotal(sum + buckerPrice);
  };

  //This is handle change in bucket
  const handleBucketChange = (event) => {
    setBucketPrice(parseInt(event.target.value));
  };
  useEffect(() => {
    updateTotalPrice();
  }, [buckerPrice]);

  //This will handle Change in qunatity and update Data Array
  const handleQuantityChanged = (e) => {
    setData(
      Data.map((data) => {
        if (data.product.id == e.target.id) {
          data.quantity = e.target.value;
        }
        return data;
      })
    );
    updateTotalPrice();
  };

  //This is just to assign values for first time
  function assignValues(cartData) {
    const temp = {};
    temp.product = cartData;
    temp.quantity = cartData.quantity;
    temp.bucketPrice = 0;
    temp.basePrice = cartData.price;
    temp.productPrice = temp.basePrice * temp.quantity; //This is for price shown for each product  quantity
    temp.totalProductPrice = temp.basePrice * temp.quantity; //This is for whole producl quantiy*basePrice+bucketPrice
    return temp;
  }
  //On Mounting of Cart variable initialization
  useEffect(() => {
    const cartData = props.cartData;
    const tempArr = cartData.map((data) => {
      return assignValues(data);
    });
    setData(tempArr);
    getBasketsHandlers();
  }, []);

  useEffect(() => {
    const cartData = props.cartData;
    const tempArr = cartData.map((data) => {
      return assignValues(data);
    });
    setData(tempArr);
  }, [props.cartData]);
  const getBasketsHandlers = async () => {
    const { data } = await getAllBaskets();
    // alert(JSON.stringify(data.data))
    console.log({ data: data.data });
    setBaskets(data.data);
  };
  //Checkout buttons enable disable handler
  const handleAgreement = (e) => {
    handleCheckout();
    if (e.target.checked) {
      // document.getElementById("Checkoutbtn").disabled = false;
      document.getElementById("CheckoutAsGuestbtn").disabled = false;
    } else {
      // document.getElementById("Checkoutbtn").disabled = true;
      document.getElementById("CheckoutAsGuestbtn").disabled = true;
    }
  };
  const checkedOutHandler = () => {
    orderHandler({ products: Data, subtotal: Total });

    history.push("/shipping");
  };

  return (
    <>
      <div className="container pt-5 mt-3 pb-5 ">
        <div className="row justify-content-center">
          <div className="col-12">
            <h1 className="shop-cart-h1 fw-bold mt-4 pt-5">Shopping Cart</h1>
          </div>
        </div>
        <div className="ho mt-2 w-100"></div>
        {Data.map((data) => (
          <ShowCartProduct
            quantity={data.quantity}
            productPrice={data.productPrice}
            product={data.product}
            removeCartItem={props.removeItem}
            handleQuantityChange={(e) => handleQuantityChanged(e)}
          />
        ))}
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
                    Messange which you want to state on bucket
                  </p>
                  <textarea
                    rows="6"
                    cols="30"
                    id="specialMessage"
                    placeholder="Write a Meassage..."
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 mt-4">
              <h3 className="message_look fw-bold">Subtotal:{Total}</h3>
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
                id="Checkoutbtn"
                onClick={checkedOutHandler}
                className="btn btn-danger mb-3 mt-2 message_look fw-bold"
                disabled={checkout}
              >
                CheckOut
              </button>
              <br />
              <button
                id="CheckoutAsGuestbtn"
                className="btn btn-danger message_look fw-bold"
                disabled
              >
                CheckOut As Guest
              </button>
            </div>

            {baskets?.map((basket) => {
              return (
                <>
                  <Basket
                    id={basket._id}
                    image={basket.image}
                    price={basket.price}
                    selected={handleBucketChange}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

const ShowCartProduct = (props) => {
  return (
    <>
      <div className="container font_fam">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-12 d-flex font_fam">
            <div className="row pt-3">
              <div className="col-lg-3 col-md-2 col-xs-4">
                <img
                  className="img-fluid img_look_on_cart"
                  src={`${process.env.REACT_APP_URL}/img/${props.product.img}`}
                  alt="Product Img"
                />
              </div>
              <div className="col-lg-4 col-md-4 col-xs-12">
                <div className="h5 pro_title_h5 pb-1">
                  {props.product.title}
                </div>

                {props.product.selectedVariants.map((variant) => (
                  <>{variant.selectedVariant}/</>
                ))}
                <p>Estimated Processing Time:</p>
                <p>{props.product.estimatedProcessingTime}</p>
              </div>

              <div className="col-lg-5 col-md-6 col-xs-12 d-flex justify-content-between">
                <input
                  className="form-control mt-5 mb-5 w-25"
                  id={props.product.id}
                  type="number"
                  onChange={(e) => props.handleQuantityChange(e)}
                  defaultValue="0"
                />
                <button
                  type="button"
                  className="btn btn-white text-center  "
                  id={props.product.id}
                  onClick={props.removeCartItem}
                >
                  x Remove
                </button>
                <div className="h5 pro_price_h5 mt-5 mb-5 mx-5 fw-bold">
                  Rs. {props.productPrice}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ho mb-3 pt-3 w-75"></div>
      </div>
    </>
  );
};
export default Cart;
