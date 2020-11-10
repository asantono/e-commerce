import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkUserAction } from "../redux/actions/userActions";

const CheckUser = () => {
  const { checkUser } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (checkUser) dispatch(checkUserAction());
  }, []);
  return <div />;
};

export default CheckUser;
