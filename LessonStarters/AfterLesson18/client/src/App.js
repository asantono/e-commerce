import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import Auth from "./authPage/Auth";
import "./authPage/Auth.css";
import Header from "./header/Header";
import "./header/Header.css";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Auth />
      </Provider>
    </div>
  );
}

export default App;
