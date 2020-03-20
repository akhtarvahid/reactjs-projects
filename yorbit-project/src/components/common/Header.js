import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  let len = props.courses? props.courses.length:0;
  const activeStyle = { color: "#F15B2A" };
  return (
  <nav aria-label="breadcrumb">
   <ol className="breadcrumb">
    <li className="breadcrumb-item active" aria-current="page">
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink></li>
    <li className="breadcrumb-item">
      <NavLink to="/courses" activeStyle={activeStyle}>
        Courses ({len})
      </NavLink></li>
    <li className="breadcrumb-item">
     <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
    </li>
  </ol>
</nav>
  );
};
Header.propTypes = {
  courses: PropTypes.array.isRequired
}
const mapStateToProps = (state) => ({
    courses: state.courses
})
export default connect(mapStateToProps)(Header);
