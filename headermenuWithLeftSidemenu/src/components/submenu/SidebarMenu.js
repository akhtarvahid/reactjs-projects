import React from "react";
import { NavLink } from "react-router-dom";

import "../styles.css";

const SidebarMenu = () => {
  return (
    <div className="leftside">
      <NavLink to="/menu1/submenu1">Submenu1</NavLink>
      <NavLink to="/menu1/submenu2">Submenu2</NavLink>
      <NavLink to="/menu1/submenu3">Submenu3</NavLink>
    </div>
  );
};

export default SidebarMenu;
