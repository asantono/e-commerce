import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./styles/main.css";

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <div className="page-container">
          <Switch>
            <Route exact path="/auth">
              <Auth />
            </Route>
            <Route exact path="/">
              <Landing />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
