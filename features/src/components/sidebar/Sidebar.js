import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

class Sidebar extends Component {
  render() {
    return (
      <div style={{ marginTop: 60 }} className="sidebar">
        {[1, 2, 3, 4, 5].map(a => (
          <NavLink key={a} to={`/sidebar/${a}`} className="navList">
            {a}
          </NavLink>
        ))}
      </div>
    );
  }
}
export default Sidebar;
