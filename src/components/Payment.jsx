import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";
import { OrderContext } from "./contexts/OrderContext";

export default function Payment() {
  const history = useHistory();
  const { order, orderHandler } = useContext(OrderContext);

  const [product, setProduct] = useState({
    name: "Tesla Roadster",
    price: ((order.subtotal + order.shipping.charges) / 164) * 100,
    description: "Cool car",
  });
  async function handleToken(token) {
    const response = await axios.post(
      `${process.env.REACT_APP_URL}/api/v1/order/payment`,
      { token, product }
    );
    const { data } = response;

    if (data.status === "success") {
      order.payment = {
        charge: data.charge,
      };

      try {
        await axios.post(`${process.env.REACT_APP_URL}/api/v1/order/addOrder`, {
          data: order,
        });
        toast("Success! Check email for details", { type: "success" });
        history.push("/showProduct");
      } catch (error) {
        toast("Something went wrong", { type: "error" });
      }
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }
  const makePayment = (token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      "Content-Type": "application/json",
      "x-token": localStorage.getItem("jwt"),
    };
    return fetch(`${process.env.REACT_APP_URL}/api/v1/order/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {})
      .catch((err) => {});
  };
  return (
    <div>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-lg-7 col-md-12">
            <div class="container">
              <div class="col-3 p-5">
                <img src="assets/images/logo.png" alt="" height="60px" />
              </div>
              <div class="col pt-2">
                <nav>
                  <ol class="breadcrumb  px-1 ">
                    <li class="breadcrumb-item  look">
                      <a class="text-dark font-weight-bold" href="#">
                        Cart
                      </a>
                    </li>
                    <li class="breadcrumb-item text-black look">
                      <a class="text-dark" href="#">
                        Info
                      </a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <div class="col-lg-7  mb-2 mt-3 mb-3">
              <ul class="list-group ">
                <li class="list-group-item">
                  Contact
                  <a class="look_a" href="#">
                    Change
                  </a>
                  <p class="discrip_look">info@gmail.com</p>
                </li>
                <li class="list-group-item">
                  Ship to
                  <a class="look_a" href="#">
                    Change
                  </a>
                  <p class="discrip_look">
                    pakisntrabsjajsdhn nbhsaau kkdjsdiu{" "}
                  </p>
                </li>

                <li class="list-group-item">
                  Shipping time
                  <p class="discrip_look pt-2 fw-bold">3-4 working days</p>
                </li>
              </ul>
            </div>
            <div class="col-lg-12 mt-4">
              <h5>Payment</h5>
              <h8>All transection are secure and encrepted</h8>
              <div class="card mt-3 border-bottom">
                <a
                  class="re_look fw-bold m-4 look_meth"
                  data-bs-toggle="collapse"
                  href="#Creditcard"
                  role="button"
                  aria-expanded="false"
                  aria-controls="reviewform"
                >
                  <div class="d-flex justify-content-between">
                    <p class=" mb-2 re_look">Credit card</p>
                    <img
                      src="https://s.pngkit.com/png/small/271-2714101_my-best-buy-visa-card-credit-card.png"
                      height="30px"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div class="collapse" id="Creditcard">
              <div class="card">
                <div class="card-header p-0">
                  <h2 class="mb-0">
                    {" "}
                    <button
                      class="btn btn-light btn-block text-left p-3 rounded-0"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <div class="d-flex align-items-center justify-content-between">
                        <StripeCheckout
                          name={"Pay Now"}
                          amount={product.price}
                          token={handleToken}
                          stripeKey={
                            "pk_test_51JL45oFh5EerqhFKO0LJoMRMa0MypvnAiTiizHjL6xUYmj3nYitJmS5fsVhQTPYHXw6gKBDfaz39z5iw0refUBQN00wJIvWNqh"
                          }
                        >
                          {/* <button className="btn btn-light btn-block text-left p-3 rounded-0"> Click here to Buy order  from Rs.{order.subtotal}</button> */}
                        </StripeCheckout>
                      </div>
                    </button>{" "}
                  </h2>
                </div>
              </div>
            </div>
            <div class="card border-bottom mt-3">
              <a
                class="re_look fw-bold m-4 look_meth "
                data-bs-toggle="collapse"
                href="#jazzcash"
                role="button"
                aria-expanded="false"
                aria-controls="reviewform"
              >
                <div class="d-flex justify-content-between">
                  <p class=" mb-2 re_look"> JazzCash</p>
                  <img
                    src="https://www.pngkit.com/png/detail/291-2911793_jazz-cash-jazz-logo.png"
                    height="30px"
                  />
                </div>
              </a>
            </div>
            <div class="collapse" id="jazzcash">
              <div class="card">
                <div class="col-auto align-self-end mt-sm-0 mt-4">
                  <button class="btn btn-block btn-danger ml-2 mt-md-0 mt-3">
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
            <div class="card  border-bottom mt-3">
              <a
                class="re_look fw-bold m-4 look_meth "
                data-bs-toggle="collapse"
                href="#easypaisa"
                role="button"
                aria-expanded="false"
                aria-controls="reviewform"
              >
                <div class="d-flex justify-content-between">
                  <p class=" mb-2 re_look">Easypaisa</p>
                  <img
                    src="https://www.vhv.rs/dpng/d/473-4736946_easypaisa-logo-png-transparent-png.png"
                    height="30px"
                  />
                </div>
              </a>
            </div>
            <div class="collapse" id="easypaisa">
              <div class="card">
                <div class="col-auto align-self-end mt-sm-0 mt-4">
                  <button class="btn btn-block btn-danger ml-2 mt-md-0 mt-3">
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* cart summary starts */}
          <div class="col-lg-5 col-md-12   pt-5 bg_color ">
            <div className="container">
              <div className="d-flex justify-content-between align-items-center">
                <div className="h6">Cart Summary</div>
              </div>
              {order?.products?.map((prod) => {
                return (
                  <div className="d-flex jusitfy-content-between align-items-center pt-3 pb-2 border-bottom">
                    <div className="item pr-2">
                      <div className="number bg-info p-2 rounded-circle w-50 text-center text-white ">
                        {prod.quantity}
                      </div>
                      <img
                        src={`${process.env.REACT_APP_URL}/img/${prod.product.img}`}
                        alt=""
                        width="80"
                        height="80"
                      />
                    </div>
                    <div className="d-flex flex-column px-3">
                      <b className="h5">{prod.product.title}</b>
                      {prod.product.selectedVariants.map((veri) => {
                        return (
                          <p className="lead lh-sm fs-6 p-0 m-0">
                            {veri.variantType}/{veri.selectedVariant}
                          </p>
                        );
                      })}
                      {/* <a href="#" className="h5 text-primary">C-770</a> */}
                    </div>
                    <div className="ml-auto">
                      <b className="h5">{prod.totalProductPrice} Rs</b>
                    </div>
                  </div>
                );
              })}
              <div className="my-3">
                {" "}
                <input
                  type="text"
                  className="w-100 form-control text-center"
                  placeholder="Gift Card or Promo Card"
                />{" "}
              </div>
              <div className="col-lg-5 col-md-12 mt-4">
                <div className="d-flex align-items-center border-top justify-content-between">
                  <div className="display-8 fw-bold">Subtotal</div>
                  <div className="ml-auto font-weight-bold">
                    Rs.{order.subtotal}
                  </div>
                </div>
                <div className="d-flex align-items-center py-2 border-bottom justify-content-between">
                  <div className="display-8 fw-bold">Shipping</div>
                  <div className="ml-auto">Rs.{order.shipping.charges}</div>
                </div>
                <div className="d-flex align-items-center py-2 justify-content-between">
                  <div className="display-8 fw-bold">Total</div>
                  <div className="ml-auto d-flex">
                    <div className="font-weight-bold">
                      Rs.{order.subtotal + order.shipping.charges}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row d-flex justify-content-between pt-5 pb-5 mb-5">
            <div class="col-6 mb-3 mt-3 ">
              <a class="look_return" href="#">
                <i class="fas fa-angle-left"></i> Return to shipping{" "}
              </a>
            </div>
            <div class="col-6 mb-3 mt-3 text-end">
              <button type="button" class="btn btn-danger  ">
                Continue Shipping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
