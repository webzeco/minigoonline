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
const Main = () => {
  const [collection,setColl] = useState({name:'Abdulrehman'});
  const setCollectionHandler=(coll)=>{
    const newColl=collection;
    newColl.name=coll;
      setColl(newColl);
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
        <Route path="/showProduct" component={ ShowComponents} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </Router>
  </Collection.Provider>
)
 };

export default Main;
