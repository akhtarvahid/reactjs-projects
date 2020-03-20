import React from "react";
import Header from "../Header";
import SidebarMenu from "./SidebarMenu";

const Submenu2 = () => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <SidebarMenu />
        <div style={{ width: "85%" }}>Submenu2</div>
      </div>
    </div>
  );
};

export default Submenu2;
