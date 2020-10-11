import React from "react";
import { useSelector } from "react-redux";

const Alert = () => {
  const { alert } = useSelector((state) => state.alertReducer);
  const alertMsg = alert.map((el) => <span key={el.id}>{el.msg}</span>);

  if (alertMsg.length > 0) return <div className="alert">{alertMsg}</div>;
  else return null;
};

export default Alert;
