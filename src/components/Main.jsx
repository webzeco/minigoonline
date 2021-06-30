import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Footer from "./common/Footer";
import Header from "./common/Header";
import NotFound from "./common/NotFound";
import Home from "./Home";
import { CollectionContext } from "./contexts/CollectionContext";
import {UserContext} from './contexts/UserContext';
import "./style/global.css";
import ShowProductDetail from "./ShowProductDetail";
import ShowComponents from "./ShowCardsComponents";
import Signup from "./Signup";
import { productData } from "./data";
import Login from "./Login";
import Forgot from "./Forgot";
import Account from "./Account";
const Main = () => {
  const [user,setUser]=useState();
  const [collection, setColl] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(productData);
  }, []);

  const setCollectionHandler = (coll) => {
    setColl(coll);
  };
  const loginHandler=(user)=>{
    console.log('hello');
    console.log(user);
    setUser(user);
  }
  const signUpHandler=(user)=>{
    console.log(user);
    setUser(user);
  }
  const forgotHandler=(user)=>{
    console.log('email sent!!!!');
  }
  return (
    <UserContext.Provider value= {{user:user}}>
    <CollectionContext.Provider value={{ coll: collection, setCollectionHandler }}>
      <Router>
        <div>
          <Header />
          <hr />
          <Switch>
            {/* <Route path="/showProduct"   component={ ShowComponents} /> */}
            <Route
            exact
              path="/"
              render={(props) => <Home bestSells={productData} {...props} />}
            />
            <Route
              path="/showProduct"
              render={(props) => (
                <ShowComponents productData={productData} {...props} />
              )}
            />
            <Route
              path="/showProductDetail"
              render={(props) => (
                <ShowProductDetail product={productData[0]} {...props} />
              )}
            />
             <Route
              path="/signup"
              render={(props) => (
                <Signup onSignUp={signUpHandler} {...props} />
              )}
            />
            <Route
              path="/login"
              render={(props) => (
                <Login onLogin={loginHandler} {...props} />
              )}
            />
            <Route
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
            

            <Route  component={NotFound} />
          </Switch>
          <Footer />

        </div>
      </Router>
    </CollectionContext.Provider>
    </UserContext.Provider>
  );
};

export default Main;
