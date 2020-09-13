import React from "react";
import ICON from "../../assets/icon.png";
const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-5">
      <span className="navbar-brand mb-0 h1 mx-auto">
        <img src={ICON} style={myStyle} alt="icon-img" /> Find Your Favourite Lyrics
      </span>
    </nav>
  );
};
const myStyle = {
  height: "30px",
  borderRadius: "50%"
};
export default Navbar;
