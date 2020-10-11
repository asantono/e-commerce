import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../redux/actions/userActions";

const HeaderMenu = () => {
  const dispatch = useDispatch();
  const logout = () => dispatch(logoutAction());
  return (
    <div className="header-menu">
      <AiOutlineMenu />
      <div className="header-menu__expand">
        <div className="header-menu__expand--links">
          <Link className="header-menu__expand--links--text" to="/newpage">
            New Page
          </Link>
          <Link className="header-menu__expand--links--text" to="/newpage">
            New Page
          </Link>
          <Link className="header-menu__expand--links--text" to="/newpage">
            New Page
          </Link>
          <div
            className="header-menu__expand--links--text"
            onClick={() => logout()}
          >
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
