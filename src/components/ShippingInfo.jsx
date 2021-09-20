import { Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addShipping, getCart } from "../storemini/reducers/cart";
import ntcjs from "ntcjs";
export default function ShippingInfo() {
  const history = useHistory();
  const dispatch = useDispatch();
  const cart = useSelector(getCart);

  const [shippingCharges, setshippingCharges] = useState(100);
  const shippingSchema = Yup.object().shape({
    firstName: Yup.string()
      .max(50)
      .required("Required").label('First Name'),
    lastName: Yup.string()
      .max(50)
      .required("Required").label('Last Name'),
    province: Yup.string()
      .min(4)
      .max(50)
      .required("Required").label('Province'),
    city: Yup.string()
      .max(50)
      .required("Required").label('City'),
    address: Yup.string()
      .max(50)
      .required("Required").label('Address'),
    zip: Yup.string().required("Required").label('Zip'),
    email: Yup.string().email().required("Required").label('Email'),
    contactNo: Yup.string().required("Required").label('Contact Number'),
  });

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
                    <Link className="text-dark font-weight-bold" href="/cart">
                      Cart
                    </Link>
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
                contactNo: ""
              }}
              validationSchema={shippingSchema}
              onSubmit={(values) => {
                // order.shipping=values;
                values.charges = shippingCharges;
                dispatch(addShipping(values));
                // newOrder.shipping = values;
                // orderHandler(newOrder);
                // await new Promise((resolve) => setTimeout(resolve, 500));
                // alert(JSON.stringify(order, null, 2));

                history.push("/payment");
              }}
            >
              {({ errors, touched }) => (
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
                    {errors.email && touched.email ? (
                      <div className="alert alert-danger  p-2" role="alert">
                        {errors.email}
                      </div>
                    ) : null}
                  </div>
                  <div className="col-lg-6 mb-3 ">
                    <Field
                      name="contactNo"
                      type="text"
                      placeholder="Enter phone number"
                      className="form-control form-control-lg"
                    />
                    {errors.contactNo && touched.contactNo ? (
                      <div className="alert alert-danger  p-2" role="alert">
                        {errors.contactNo}
                      </div>
                    ) : null}
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
                        {errors.firstName && touched.firstName ? (
                          <div className="alert alert-danger  p-2" role="alert">
                            {errors.firstName}
                          </div>
                        ) : null}
                      </div>
                      <div className="col-lg-6 mb-3 ">
                        <Field
                          name="lastName"
                          type="text"
                          placeholder="Last Name"
                          className="form-control form-control-lg"
                        />
                        {errors.lastName && touched.lastName ? (
                          <div className="alert alert-danger  p-2" role="alert">
                            {errors.lastName}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-lg-12 mb-3">
                      <Field
                        name="province"
                        type="text"
                        placeholder="Province"
                        className="form-control form-control-lg"
                      />
                      {errors.province && touched.province ? (
                        <div className="alert alert-danger  p-2" role="alert">
                          {errors.province}
                        </div>
                      ) : null}
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
                          {errors.city && touched.city ? (
                            <div className="alert alert-danger  p-2" role="alert">
                              {errors.city}
                            </div>
                          ) : null}
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
                          {errors.zip && touched.zip ? (
                            <div className="alert alert-danger  p-2" role="alert">
                              {errors.zip}
                            </div>
                          ) : null}
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
                        {errors.address && touched.address ? (
                          <div className="alert alert-danger  p-2" role="alert">
                            {errors.address}
                          </div>
                        ) : null}
                      </div>
                    </div>
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
              )}
            </Formik>
          </div>
        </div>

        <div className="col-lg-5 col-md-12  pt-5 bg_color">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <div className="h6">Cart Summary</div>
            </div>
            {cart?.list?.map((prod) => {
              return (
                <div key={prod.product.id} className="d-flex jusitfy-content-between align-items-center pt-3 pb-2 border-bottom">
                  <div className="item pr-2">
                    <div className="number bg-info p-2 rounded-circle w-50 text-center text-white ">
                      {prod.qty}
                    </div>
                    <img
                      src={`${process.env.REACT_APP_URL}/img/${prod.product.images[0]}`}
                      alt=""
                      width="80"
                      height="80"
                    />
                  </div>
                  <div className="d-flex flex-column px-3">
                    <b className="h5">{prod.product.title}</b>
                    {prod.selectedVariants.map((veri, index) => {
                      if (veri.variantType === 'Color') {
                        return <p key={index} className="lead lh-sm fs-6 p-0 m-0" key={index}>{ntcjs.name(veri.selectedVariant)[1]}/</p>
                      }
                      return (
                        <p key={index} className="lead lh-sm fs-6 p-0 m-0">
                          {veri.selectedVariant}/
                        </p>
                      );
                    })}
                    {/* <a href="#" className="h5 text-primary">C-770</a> */}
                  </div>
                  <div className="ml-auto">
                    <b className="h5">{prod.qty * prod.product.price} Rs</b>
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
                  Rs.{cart.subtotal}
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
                    Rs.{cart.subtotal + shippingCharges}
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
