import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import "./styles/main.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Authentication from "./pages/Authentication";
import Product from "./pages/Product";

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <div className="page-container">
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route exact path="/auth">
              <Authentication />
            </Route>
            <Route exact path="/product">
              <Product />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
