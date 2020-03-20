import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="topnav">
      <NavLink to="/menu1">Menu1</NavLink>
      <NavLink to="/menu2">Menu2</NavLink>
      <NavLink to="/menu3">Menu3</NavLink>
    </div>
  );
};

export default Header;
