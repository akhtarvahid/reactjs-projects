import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">
        Logo
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav">
          <NavLink to="/sidebar" className="nav-item nav-link">
            Sidebar
          </NavLink>
          <NavLink to="/page1" className="nav-item nav-link">
            Page1
          </NavLink>
          <NavLink to="/page2" className="nav-item nav-link">
            Page2
          </NavLink>
          <NavLink to="/page3" className="nav-item nav-link">
            Page3(HOC)
          </NavLink>
          <NavLink to="/page4" className="nav-item nav-link">
            Page4
          </NavLink>
          <NavLink to="/page5" className="nav-item nav-link">
            Page5
          </NavLink>
          <NavLink to="/page6" className="nav-item nav-link">
            Page6
          </NavLink>
          <NavLink to="/page7-sass" className="nav-item nav-link">
            Sass
          </NavLink>
          <NavLink to="/new-feature" className="nav-item nav-link">
            N-Feature
          </NavLink>
          <NavLink to="/css" className="nav-item nav-link">
            CSS
          </NavLink>
          <NavLink to="/sc" className="nav-item nav-link">
            Styled-C
          </NavLink>
          <NavLink to="/pagination" className="nav-item nav-link">
            Pagination
          </NavLink>
          <NavLink to="/search" className="nav-item nav-link">
            Search
          </NavLink>
          <NavLink to="/autosuggest" className="nav-item nav-link">
            AutoSuggest
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Header;
