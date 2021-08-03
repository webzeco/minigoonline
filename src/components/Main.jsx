import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Footer from "./common/Footer";
import Header from "./common/Header";
import NotFound from "./common/NotFound";
import Home from "./Home";
import { CollectionContext } from "./contexts/CollectionContext";
import { UserContext } from "./contexts/UserContext";

import ShowProductDetail from "./ShowProductDetail";
import ShowComponents from "./ShowCardsComponents";
import Signup from "./Signup";
import Cart from "./Cart";
import { productData } from "./data";
import Login from "./Login";
import Forgot from "./Forgot";
import Account from "./Account";
import { ProductDetailContext } from "./contexts/ProductDetailContext";
import { retry } from "async";
import { login } from "../services/authService";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "./common/Navbar";
import { getAllCategories } from "../services/categoryService";
import { getMe } from "../services/UsersService";
import { deleteProduct, getAllProducts } from "../services/productServices";
const Main = () => {
  const history = useHistory();
  const [user, setUser] = useState();
  const [collection, setColl] = useState("");
  const [items, setItems] = useState([]);
  const [product, setProduct] = useState();
  const [relatedProd, setRelatedProd] = useState();
  const [cartData, setCartData] = useState([]);
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllCategoriesHandler();
    getAllProductHandler();
    getMeHandler();
    // alert("JSON.stringify(categories)");
    return () => {
      console.log("clean up");
    };
  }, []);
  const removeCartItem = (e) => {
    console.log(e.target.id);
    setCartData(cartData.filter((data) => data.id == e.target.value));
  };
  useEffect(() => {
    console.log(cartData);
  }, [cartData]);

  const handleCartData = (data) => {
    let id = cartData.length + 1;
    data.id = id;
    data.quantity = 1;
    setCartData([...cartData, data]);
  };
  const setCollectionHandler = (coll) => {
    setColl(coll);
  };
  const loginHandler = async (user) => {
    try {
      const { data } = await login(user);
      console.log(data);
      localStorage.setItem("jwt", data.token);
      toast.success("logged in successfully !!!", {
        position: toast.POSITION.TOP_CENTER,
      });
      // history.push('/');
      window.location = "/";
    } catch (error) {
      toast.error("Incorrect username or password", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  const getAllCategoriesHandler = async () => {
    const data = await getAllCategories();
    // console.log({data});
    setCategories(data.data.data);
  };
  const signUpHandler = (user) => {
    setUser(user);
    history.push("/");
  };
  const getMeHandler = async () => {
    const { data } = await getMe();
    console.log({ data });
    setUser(data.data);
  };
  const getAllProductHandler = async () => {
    try {
      const { data } = await getAllProducts();
      setProducts(data.data);
    } catch (error) {
      toast.error("something went wrong to get all products", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    console.log({ products });
  };

  const forgotHandler = (user) => {
    ("email sent!!!!");
    history.push("/");
  };
  const addToCratHandler = (user) => {
    history.push("/cart");
  };
  const productDetailHandler = (prod) => {
    setProduct(prod);
    setRelatedProd(items);
    history.push("/showProductDetail");
  };
  return (
    <UserContext.Provider value={{ user: user }}>
      <ProductDetailContext.Provider
        value={{ product, relatedProd, productDetailHandler }}
      >
        <CollectionContext.Provider
          value={{ coll: collection, setCollectionHandler }}
        >
          <div>
            <ToastContainer style={{ width: "322px" }} />
            {/* <Header /> */}
            <Navbar categories={categories} />
            {/* <hr /> */}
            <Switch>
              {/* <Route path="/showProduct"   component={ ShowComponents} /> */}
              <Route
                exact
                path="/"
                render={(props) => <Home bestSells={productData} {...props} />}
              />
              <Route
                exact
                path="/showProduct"
                render={(props) => (
                  <ShowComponents productData={products} {...props} />
                )}
              />
              <Route
                exact
                path="/showProductDetail"
                render={(props) => (
                  <ShowProductDetail
                    cartData={cartData}
                    addToCratHandler={addToCratHandler}
                    sendCartData={handleCartData}
                    product={product}
                    {...props}
                  />
                )}
              />
              <Route
                exact
                path="/signup"
                render={(props) => (
                  <Signup onSignUp={signUpHandler} {...props} />
                )}
              />
              <Route
                exact
                path="/login"
                render={(props) => <Login onLogin={loginHandler} {...props} />}
              />
              <Route
                exact
                path="/forgot"
                render={(props) => (
                  <Forgot onForgot={forgotHandler} {...props} />
                )}
              />
              <Route
                path="/account"
                render={(props) => (
                  <Account onForgot={forgotHandler} {...props} />
                )}
              />
              <Route
                path="/cart"
                render={(props) => (
                  <Cart
                    removeItem={(e) => removeCartItem(e)}
                    cartData={cartData}
                  />
                )}
              />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </div>
        </CollectionContext.Provider>
      </ProductDetailContext.Provider>
    </UserContext.Provider>
  );
};

export default Main;
