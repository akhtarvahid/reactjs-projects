import React, { Component } from "react";
import Header from "./Header";
import "./styles.css";
import SidebarMenu from "./submenu/SidebarMenu";

class Menu1 extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={{ display: "flex" }}>
          <SidebarMenu />
          <div style={{ width: "85%" }}>
            <div>
              <h1>Menu1</h1>
              <p>....</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu1;
