import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import './style/login.css';
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
  const addAddressHandler=async (values)=>{
    try {
        const {data}=await addAddress(values,user._id);
        console.log(data);
        toast.success("Address Successfully !!!")
    } catch (error) {
        toast.error("Please enter Correct Info !");
    }
  }
  return (
    <div class="container px-5  m-5 pb-5 font_fam w-auto">
      <h3 class="submit-content fw-bold text-center mt-5">Add a New Address</h3>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          compony:"",
          address1:"",
          address2:"",
          city:"",
          province:"",
          zip:"",
          contactNo:""
        }}
        validationSchema={addressSchema}
        onSubmit={(values) => {
            // console.log(values,user._id);
          addAddressHandler(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
              <div className="d-flex mt-5">
              <div class="mb-4  col-6 p-1 ">
              <Field
                name="firstName"
                className="form-control"
                placeholder="First name"
              />
              {errors.firstName && touched.firstName ? (
                <div class="alert alert-danger  p-2" role="alert">
                  {errors.firstName}
                </div>
              ) : null}
            </div>
            <div class="mb-4 col-6 m-1">
              <Field
                name="lastName"
                className="form-control"
                placeholder="Last Name"
              />
              {errors.lastName && touched.lastName ? (
                <div class="alert alert-danger  p-2" role="alert">
                  {errors.lastName}
                </div>
              ) : null}
            </div>
           
              </div>
          <div class="mb-4 col-6">
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
            <div className="d-flex">
            <div class="mb-4 col-6 p-1">
              <Field
                name="city"
                type="text"
                className="form-control"
                placeholder="City"
              />
              {errors.city && touched.city ? (
                <div class="alert alert-danger  p-2 p-2 " role="alert">
                  {errors.city}
                </div>
              ) : null}
            </div> 
            <div class="mb-4 col-6 p-1">
              <Field
                name="zip"
                type="text"
                className="form-control"
                placeholder="Postal/Zip code"
              />
              {errors.zip && touched.zip ? (
                <div class="alert alert-danger  p-2 p-2 " role="alert">
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
              <button type="submit" class="btn text-uppercase w-100 creat_btn ">
Submit              </button>
            </div>
            <Link class="creat_look text-center fw-bold mb-4" to="/">
              <h5 class=" mb-2 mt-5 creat_look">Go Back</h5>
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
}
