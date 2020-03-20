import React from "react";
import Header from "../Header";
import SidebarMenu from "./SidebarMenu";
import "../styles.css";

const Submenu1 = () => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <SidebarMenu />
        <div style={{ width: "85%" }}>Submenu1</div>
      </div>
    </div>
  );
};

export default Submenu1;
