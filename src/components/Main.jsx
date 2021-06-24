import React, { useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Footer from "./common/Footer";
import Header from "./common/Header";
import NotFound from "./common/NotFound";
import AddProduct from "./addProductComponent";
import ShowProductComponent from "./showProductComponent";
import Home from "./Home";
import ProductsCollection from "./ProductsCollection";
import { Collection } from "./contexts/Collection";
import './style/global.css'
import ShowComponents from "./ShowComponents";
import { productData } from "./data";
const Main = () => {
  const [collection,setColl] = useState('');
  const setCollectionHandler=(coll)=>{
      setColl(coll);
  };
 return (
<Collection.Provider value={{coll:collection,setCollectionHandler}}>
  <Router >
    <div>
      <Header />
      <hr />
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/addProduct" component={AddProduct} />
        <Route path="/productCollection" component={ProductsCollection} />
        {/* <Route path="/showProduct"   component={ ShowComponents} /> */}
        <Route
            path="/showProduct"
            render={(props) => (
              <ShowComponents
              productData={productData}
                {...props}
              />
            )}
          />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </Router>
  </Collection.Provider>
)
 };

export default Main;
