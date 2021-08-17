import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./style/login.css";
import { toast } from "react-toastify";
import { addAddress } from "../services/UsersService";
import { UserContext } from "./contexts/UserContext";
const addressSchema = Yup.object().shape({
  firstName: Yup.string().required("Required").label("First Name"),
  lastName: Yup.string().required("Required").label("Last Name"),
  compony: Yup.string().required("Required").label("Compony"),
  address1: Yup.string().required("Required").label("Address 1"),
  address2: Yup.string().required("Required").label("Address 2"),
  city: Yup.string().required("Required").label("City"),
  province: Yup.string().required("Required").label("Province"),
  zip: Yup.string().required("Required").label("Zip"),
  contactNo: Yup.string().required("Required").label("contactNo"),
});
export default function AddAddress() {
  const { user } = useContext(UserContext);
  const addAddressHandler = async (values) => {
    try {
      const { data } = await addAddress(values, user._id);
      console.log(data);
      toast.success("Address Successfully !!!");
    } catch (error) {
      toast.error("Please enter Correct Info !");
    }
  };

  return (
    <>
      <div class="container pb-5 font_fam w-auto">
        <div className="row">
          <div className="col-12">
            <div className="d-flex row mt-3 ">
              <div className="col-10">
                <div className="h5 text-uppercase pro_title_h5">My Account</div>
              </div>
              <div className="col-2 justify-content-center">
                <a href="/">
                  <p className="re_look text-center  pt-2">Logout</p>
                </a>
              </div>
            </div>
          </div>

          <div className="ho mb-3 mt-2 w-100"></div>
          <div className="col-lg-6 mt-4 align-items-center">
            <div className="card rounded pt-3 p-2">
              <div className="px-1 d9_look">First Name :</div>
              <div className=" px-1 d9_look">Last Name :</div>
              <div className="px-1 d9_look">Address 1 : </div>
              <div className="px-1 d9_look">Address 2 :</div>
              <div className=" px-1 d9_look">City :</div>
              <div className=" px-1 d9_look">Province : </div>
              <div className=" px-1 d9_look">Zip :</div>
              <div className="px-1 d9_look">Contact no :</div>
            </div>
          </div>
          <div class=" col-lg-6 cart mt-4 align-items-center text-center">
            <button
              type="submit"
              class="btn text-uppercase w-75 align-items-center creat_btn "
            >
              Add a New Address
            </button>
          </div>
        </div>
      </div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          compony: "",
          address1: "",
          address2: "",
          city: "",
          province: "",
          zip: "",
          contactNo: "",
        }}
        validationSchema={addressSchema}
        onSubmit={(values) => {
          // console.log(values,user._id);
          addAddressHandler(values);
        }}
      >
        {({ errors, touched }) => (
          <div className="container ">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <Form>
                  <div class="mb-4  col-12 ">
                    <Field
                      name="firstName"
                      className="form-control"
                      placeholder="First name"
                    />
                    {errors.firstName && touched.firstName ? (
                      <div class="alert alert-danger " role="alert">
                        {errors.firstName}
                      </div>
                    ) : null}
                  </div>
                  <div class="mb-4 col-12">
                    <Field
                      name="lastName"
                      className="form-control"
                      placeholder="Last Name"
                    />
                    {errors.lastName && touched.lastName ? (
                      <div class="alert alert-danger " role="alert">
                        {errors.lastName}
                      </div>
                    ) : null}
                  </div>

                  <div class="mb-4 col-12">
                    <Field
                      name="compony"
                      className="form-control"
                      placeholder="compony"
                    />
                    {errors.compony && touched.compony ? (
                      <div class="alert alert-danger  p-2" role="alert">
                        {errors.compony}
                      </div>
                    ) : null}
                  </div>
                  <div class="mb-4">
                    <Field
                      name="address1"
                      type="text"
                      className="form-control"
                      placeholder="Address1"
                    />
                    {errors.address1 && touched.address1 ? (
                      <div class="alert alert-danger  p-2 p-2 " role="alert">
                        {errors.address1}
                      </div>
                    ) : null}
                  </div>

                  <div class="mb-4">
                    <Field
                      name="address2"
                      type="text"
                      className="form-control"
                      placeholder="Address2"
                    />
                    {errors.address2 && touched.address2 ? (
                      <div class="alert alert-danger  p-2 p-2 " role="alert">
                        {errors.address2}
                      </div>
                    ) : null}
                  </div>
                  <div class="mb-4">
                    <Field
                      name="province"
                      type="text"
                      className="form-control"
                      placeholder="province"
                    />
                    {errors.province && touched.province ? (
                      <div class="alert alert-danger  p-2 p-2 " role="alert">
                        {errors.province}
                      </div>
                    ) : null}
                  </div>
                  <div className="d-flex gap-2">
                    <div class="mb-4 col-6 ">
                      <Field
                        name="city"
                        type="text"
                        className="form-control"
                        placeholder="City"
                      />
                      {errors.city && touched.city ? (
                        <div class="alert alert-danger " role="alert">
                          {errors.city}
                        </div>
                      ) : null}
                    </div>
                    <div class="mb-4 col-6">
                      <Field
                        name="zip"
                        type="text"
                        className="form-control"
                        placeholder="Postal/Zip code"
                      />
                      {errors.zip && touched.zip ? (
                        <div class="alert alert-danger  " role="alert">
                          {errors.zip}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div class="mb-4">
                    <Field
                      name="contactNo"
                      type="text"
                      className="form-control"
                      placeholder="Contact No."
                    />
                    {errors.contactNo && touched.contactNo ? (
                      <div class="alert alert-danger  p-2 p-2 " role="alert">
                        {errors.contactNo}
                      </div>
                    ) : null}
                  </div>

                  <div class="cart mt-4 align-items-center">
                    <button
                      type="submit"
                      class="btn text-uppercase w-100 creat_btn "
                    >
                      Submit{" "}
                    </button>
                  </div>
                  <Link class="creat_look text-center fw-bold mb-4" to="/">
                    <h5 class=" mb-2 mt-5 creat_look">Go Back</h5>
                  </Link>
                </Form>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}
