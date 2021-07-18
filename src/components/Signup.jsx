import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./style/signup.css";

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(6)
    .max(50)
    .required("Required").label('Username'),
  password: Yup.string()
    .min(6)
    .max(50
      )
    .required("Required").label('Password'),
  passwordConfirm: Yup.string()
    .min(6)
    .max(50)
    .required("Required").label('PasswordConfirm'),
  email: Yup.string().email().required("Required").label('Email'),
});

export default function Signup({onSignUp}) {
  return (
    <div class="container pt-5 mt-5 pb-5 font_fam w-25">
      <h3 class="submit-content fw-bold text-center mt-5">Create an Account</h3>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          passwordConfirm: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          onSignUp(values)
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div class="mb-4 mt-5 ">
              <Field
                name="username"
                className="form-control"
                placeholder="Username"
              />
              {errors.username && touched.username ? (
                <div class="alert alert-danger  p-2" role="alert">
                  {errors.username}
                </div>
              ) : null}
            </div>
            <div class="mb-4">
              <Field
                name="email"
                type="email"
                className="form-control"
                placeholder="Email"
              />
              {errors.email && touched.email ? (
                <div class="alert alert-danger  p-2" role="alert">
                  {errors.email}
                </div>
              ) : null}
            </div>
            
            <div class="mb-4 ">
              <Field
                name="password"
                type="password"
                className="form-control"
                placeholder="password"
              />
              {errors.password && touched.password ? (
                <div class="alert alert-danger  p-2" role="alert">
                  {errors.password}
                </div>
              ) : null}
            </div>
            <div class="mb-4  ">
              <Field
                name="passwordConfirm"
                type="password"
                className="form-control"
                placeholder="passwordConfirm"
              />
              {errors.passwordConfirm && touched.passwordConfirm ? (
                <div class="alert alert-danger  p-2" role="alert">
                  {errors.passwordConfirm}
                </div>
              ) : null}
            </div>

            <div class="cart mt-4 align-items-center">
            <button type="submit" class="btn text-uppercase w-100 creat_btn fw-bold ">CREATE</button></div>
            
          </Form>
        )}
      </Formik>
    </div>
  );
}
