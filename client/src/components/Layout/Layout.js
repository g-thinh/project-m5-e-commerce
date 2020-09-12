import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "../../containers/HomePage";
import ProductsPage from "../../containers/ProductsPage";
import Nav from "../Nav";

const Layout = () => {
  return (
    <Router>
      <Nav>
        <nav>
          <h1>This is the Navitation Bar</h1>

          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/products">
              <ProductsPage />
            </Route>
            <Route path="/careers">
              <h1>this is the careers page</h1>
            </Route>
            <Route path="/about">
              <h1>this is the careers page</h1>
            </Route>
          </Switch>
        </nav>
      </Nav>
    </Router>
  );
};

export default Layout;
