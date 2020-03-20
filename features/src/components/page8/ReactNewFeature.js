import React, { Component } from "react";

import Login from "./context-type/Login";
import Profile from "./context-type/Profile";
import AuthContext from "./context-type/auth-context";
import ReactMemo from "./memo/ReactMemo";
import ReactLazy from "./lazy/ReactLazy";
import Hooks from "./hooks/Hooks";
import Memo from "./memo2/Memo";
import Refs from "./ref/Refs";

class ReactNewFeature extends Component {
  state = {
    isAuth: false
  };

  toggleAuth = () => {
    this.setState(prevState => ({ isAuth: !prevState.isAuth }));
  };

  render() {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          {/* <Hooks />
          <hr />
          <Memo />
        </div>
        <div style={{ width: "50%", borderRight: "2px solid grey" }}>
          <AuthContext.Provider
            value={{ isAuth: this.state.isAuth, toggleAuth: this.toggleAuth }}
          >
            <Login />
            <Profile />
          </AuthContext.Provider>
          <hr />
          <h5>memo</h5>
          <ReactMemo />
          <hr />
          <h5>lazy</h5>
          <ReactLazy />
          <hr /> */}
          <Refs />
        </div>
      </div>
    );
  }
}

export default ReactNewFeature;
