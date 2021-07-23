import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import React from "react";
import "./style/forgot.css"
import { Link } from "react-router-dom";
const forgotSchema = Yup.object().shape({
  email: Yup.string().email().required("Required").label('Username'),
});
export default function Forgot({onForgot}) {
  return (
    <div class="container pt-5 mt-5 pb-5  w-25">
      <h3 class="submit-content fw-bold text-center mt-5">Reset Password</h3>
      <div class="d-flex justify-content-center pt-2">
        <p className="message_look">Remember your password?</p>
        <Link class=" text-center" to="/login">
          <h5 class="creat_look fw-bold">Login</h5>
        </Link>
      </div>
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={forgotSchema}
        onSubmit={(values) => {
          onForgot(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div class="mb-4">
              <Field
                name="email"
                type="email"
                className="form-control"
                placeholder="Email"
              />
              {errors.email && touched.email ? (
                <div class="alert alert-danger p-2" role="alert">
                  {errors.email}
                </div>
              ) : null}
            </div>

            <div class="cart mt-4 align-items-center">
              <button type="submit" class="btn text-uppercase w-100 creat_btn message_look fw-bold ">
                SEND RESET EMAIL
              </button>
            </div>
            <Link class="creat_look text-center fw-bold mb-4" to="/signup">
              <h5 class=" mb-2 mt-5 creat_look fw-bold"> CREAT ACCOUNT</h5>
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
}
