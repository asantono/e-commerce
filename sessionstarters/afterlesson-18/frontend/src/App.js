import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Product from "./pages/Product";
import "./styles/main.css";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className="page-container">
          <Switch>
            <Route exact path="/auth">
              <Auth />
            </Route>
            <Route exact path="/product">
              <Product />
            </Route>
            <Route exact path="/">
              <Landing />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
