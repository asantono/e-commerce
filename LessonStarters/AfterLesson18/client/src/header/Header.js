import React from "react";
import { useDispatch } from "react-redux";
import { getSecret, logoutUser } from "../redux/actions/authActions";

const Header = () => {
  const dispatch = useDispatch();

  // const logoutUser = async () => {
  //   try {
  //     const res = await API.get("api/v1/auth/logout");
  //     console.log(res);
  //   } catch (err) {
  //     console.log(err.response.data.message);
  //   }
  // };

  // const getSecret = async () => {
  //   try {
  //     const res = await API.get("api/v1/auth/secretcontent");
  //     console.log(res);
  //   } catch (err) {
  //     console.log(err.response);
  //   }
  // };

  return (
    <div className="header">
      <div className="header__item" onClick={(e) => dispatch(getSecret())}>
        SECRET!!!
      </div>
      <div className="header__item" onClick={(e) => dispatch(logoutUser())}>
        Logout
      </div>
    </div>
  );
};

export default Header;
