import { Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { OrderContext } from "./contexts/OrderContext";

export default function ShippingInfo() {
  const history = useHistory();
  const { order, orderHandler } = useContext(OrderContext);
  const [shippingCharges, setshippingCharges] = useState(100);
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-lg-7 col-md-12">
          <div className="container">
            <div className="col-3 p-5">
              <img
                src="https://namibwear.com/wp-content/plugins/minigo/inc/admin/img/logo.png"
                alt="logo here"
                height="60px"
              />
            </div>
            <div className="col pt-2">
              <nav>
                <ol className="breadcrumb  px-1">
                  <li className="breadcrumb-item  look">
                    <a className="text-dark font-weight-bold" href="#">
                      Cart
                    </a>
                  </li>
                  <li className="breadcrumb-item text-black look">
                    <a className="text-dark" href="#">
                      Info
                    </a>
                  </li>
                </ol>
              </nav>
            </div>
            <Formik
              initialValues={{
                email: "",
                contactNo: "",
                firstName: "",
                lastName: "",
                province: "",
                city: "",
                zip: 0,
                address: "",
              }}
              onSubmit={async (values) => {
                // order.shipping=values;
                const { ...newOrder } = order;
                values.charges = shippingCharges;
                newOrder.shipping = values;
                orderHandler(newOrder);
                // await new Promise((resolve) => setTimeout(resolve, 500));
                // alert(JSON.stringify(order, null, 2));

                history.push("/payment");
              }}
            >
              <Form>
                <div className="row d-flex justify-content-between">
                  <div className="col-6 ">
                    <h5>Contact Information</h5>
                  </div>
                  <div className="col-6 text-end ">
                    <p>
                      Alreay have a{" "}
                      <a href="#" className="look_return">
                        Login?
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 mb-3 ">
                  <Field
                    name="email"
                    type="text"
                    placeholder="Enter Email"
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="col-lg-6 mb-3 ">
                  <Field
                    name="contactNo"
                    type="text"
                    placeholder="Enter phone number"
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input small"
                    type="checkbox"
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label small mb-3"
                    for="flexCheckChecked"
                  >
                    Sign up to receive offers from MiniGO. You may opt out at
                    ant time.
                  </label>
                </div>
                <h5>Shipping Address</h5>

                <div className="col-lg-12">
                  <div className="row ">
                    <div className="col-lg-6 mb-3 ">
                      <Field
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        className="form-control form-control-lg"
                      />
                    </div>
                    <div className="col-lg-6 mb-3 ">
                      <Field
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        className="form-control form-control-lg"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 mb-3">
                    <Field
                      name="province"
                      type="text"
                      placeholder="Province"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="row justify-content-between mb-3">
                    <div className="col-6">
                      <div className="input-group ">
                        <Field
                          name="city"
                          type="text"
                          placeholder="City"
                          aria-label="Text input with dropdown button"
                          className="form-control"
                        />
                        <button
                          className="btn  dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        ></button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="input-group ">
                        <Field
                          name="zip"
                          type="text"
                          placeholder="Zip code"
                          aria-label="Text input with dropdown button"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 mb-3 mt-3">
                      <Field
                        name="address"
                        type="text"
                        placeholder="Address"
                        aria-label="Text input with dropdown button"
                        className="form-control form-control-lg"
                      />
                    </div>
                  </div>

                  {/* <div className="col-lg-12 mb-3">
                                    <input type="text" className="form-control form-control-lg" placeholder="Phone" />

                                </div> */}

                  <div className="col-lg-12 mb-1">
                    <div className="form-check">
                      <input
                        className="form-check-input small"
                        type="checkbox"
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label small mb-3"
                        for="flexCheckChecked"
                      >
                        Save the info for next time.
                      </label>
                    </div>
                    <div className="row d-flex justify-content-between  pb-5 mb-5">
                      <div className="col-6 mb-3 mt-3 ">
                        <a className="look_return" href="#">
                          <i className="fas fa-angle-left"></i> Return to
                          shipping{" "}
                        </a>
                      </div>
                      <div className="col-6 mb-3 mt-3 text-end">
                        <button type="submit" className="btn btn-danger  ">
                          Continue Shipping
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        </div>

        <div className="col-lg-5 col-md-12  pt-5 bg_color">
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
                <div className="ml-auto">Rs.{shippingCharges}</div>
              </div>
              <div className="d-flex align-items-center py-2 justify-content-between">
                <div className="display-8 fw-bold">Total</div>
                <div className="ml-auto d-flex">
                  <div className="font-weight-bold">
                    Rs.{order.subtotal + shippingCharges}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
