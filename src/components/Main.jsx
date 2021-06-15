import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Footer from "./common/Footer";
import Header from "./common/Header";
import NotFound from "./common/NotFound";
import Home from "./Home";


const Main =()=>(
  <Router>
    <div>
      <Header />
      <hr />
      <Switch>

        <Route exact path="/" component={Home} />
        <Route path="/users" component={Home} />
        <Route path="/contact" component={Home} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default Main;