import React from "react";
import "./App.css";
import Auth from "./authPage/Auth";
import "./authPage/Auth.css";
import Header from "./header/Header";
import "./header/Header.css";

function App() {
  return (
    <div>
      <Header />
      <Auth />
    </div>
  );
}

export default App;
