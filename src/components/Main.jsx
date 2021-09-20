import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./common/Footer";
import NotFound from "./common/NotFound";
import Home from "./Home";
import ProductDetail from "./ProductDetail";
import Products from "./Products";
import Signup from "./Signup";
import Cart from "./Cart";
import Login from "./Login";
import Forgot from "./Forgot";
import Account from "./Account";
import { ProductDetailContext } from "./contexts/ProductDetailContext";
import {
  forgotPassword,
  login,
  resetPassword,
  signup,
} from "../services/authService";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "./common/Navbar";
import Payment from "./Payment";
import ShippingInfo from "./ShippingInfo";
import ResetPassword from "./ResetPassword";
import AddAddress from "./AddAddress";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProductsSelector,
  loadProducts,
} from "../storemini/reducers/products";
const Main = () => {
  const history = useHistory();
  const [product, setProduct] = useState();
  const dispatch = useDispatch();
  const products = useSelector(getAllProductsSelector);
  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  const loginHandler = async (user) => {
    try {
      const { data } = await login(user);
      localStorage.setItem("jwt", data.token);
      toast.success("logged in successfully !!!", {
        position: toast.POSITION.TOP_CENTER,
      });
      window.location = "/";
    } catch (error) {
      toast.error("Incorrect username or password", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const signUpHandler = async (user) => {
    try {
      const { data } = await signup(user);
      localStorage.setItem("jwt", data.token);
      toast.success("sign up in successfully !!!", {
        position: toast.POSITION.TOP_CENTER,
      });
      window.location = "/";
    } catch (error) {
      toast.error("Username or Email already existed Please used another !!!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const forgotHandler = async (email) => {
    const data = await forgotPassword(email);
    if (data.data.status === "success")
      toast.success("Email successfully sent Please check your mail");
    else {
      toast.error(data.data.message);
      history.push("/");
    }
  };

  const productDetailHandler = (prod) => {
    setProduct(prod);
    history.push("/ProductDetail");
  };
  const resetPasswordHandler = async (values) => {
    const { password, confirmPassword, token } = values;
    // console.log(values);
    try {
      await resetPassword({ password, confirmPassword }, token);
      toast.success(" Password Reset Successfully !!", {
        position: toast.POSITION.TOP_CENTER,
      });
      setTimeout(() => {
        toast.success(" Login with New Password !!", {
          position: toast.POSITION.TOP_CENTER,
        });
        history.push("/login");
      }, 1500);
    } catch (error) {
      console.log(error);
      toast.error("Invalid token !!!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  return (
    <ProductDetailContext.Provider value={{ product, productDetailHandler }}>
      <div>
        <ToastContainer style={{ width: "322px" }} />
        <Navbar products={products} />
        <Switch>
          <Route
            exact
            path="/" //home page
            render={(props) => <Home {...props} />}
          />
          <Route
            exact
            path="/products" // products with categories
            render={(props) => <Products {...props} />}
          />
          <Route
            exact
            path="/ProductDetail" // single product with detail
            render={(props) => <ProductDetail product={product} {...props} />}
          />
          <Route
            exact
            path="/signup"
            render={(props) => <Signup onSignUp={signUpHandler} {...props} />}
          />

          <Route exact path="/payment" render={(props) => <Payment />} />
          <Route
            exact
            path="/shipping" //shipping detail getting here
            render={(props) => <ShippingInfo />}
          />
          <Route
            exact
            path="/login"
            render={(props) => <Login onLogin={loginHandler} {...props} />}
          />
          <Route
            exact
            path="/resetPassword/:token"
            render={(props) => (
              <ResetPassword
                onResetPassword={resetPasswordHandler}
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/forgot"
            render={(props) => <Forgot onForgot={forgotHandler} {...props} />}
          />
          <Route
            path="/account" //show account info , all order from this account
            render={(props) => <Account onForgot={forgotHandler} {...props} />}
          />
          <Route
            path="/addAddress" //  all addresses  and new add addresses
            render={(props) => (
              <AddAddress onForgot={forgotHandler} {...props} />
            )}
          />
          <Route
            path="/cart" // cart details
            render={(props) => <Cart />}
          />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </ProductDetailContext.Provider>
  );
};

export default Main;
