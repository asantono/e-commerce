import React from "react";
import AuthComp from "../components/auth/AuthComp";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const Auth = () => {
  const { clearance } = useSelector((state) => state.userReducer.user);
  if (clearance) return <Redirect to="/" />;
  return <AuthComp />;
};

export default Auth;
