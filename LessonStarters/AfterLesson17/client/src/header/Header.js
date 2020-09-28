import React from "react";
import API from "../utils/API";

const Header = () => {
  const logoutUser = async () => {
    try {
      const res = await API.get("api/v1/auth/logout");
      console.log(res);
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  const getSecret = async () => {
    try {
      const res = await API.get("api/v1/auth/secretcontent");
      console.log(res);
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <div className="header">
      <div className="header__item" onClick={(e) => getSecret()}>
        SECRET!!!
      </div>
      <div className="header__item" onClick={(e) => logoutUser()}>
        Logout
      </div>
    </div>
  );
};

export default Header;
