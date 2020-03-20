import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Menu1 from "./components/Menu1";
import Menu2 from "./components/Menu2";
import Menu3 from "./components/Menu3";
import Submenu1 from "./components/submenu/Submenu1";
import Submenu2 from "./components/submenu/Submenu2";
import Submenu3 from "./components/submenu/Submenu3";

ReactDOM.render(
  <div>
    <Router>
      <Switch>
        <Route path="/" exact component={Menu1} />
        <Route path="/menu1" exact component={Menu1} />
        <Route path="/menu2" exact component={Menu2} />
        <Route path="/menu3" exact component={Menu3} />
        <Route path="/menu1/submenu1" exact component={Submenu1} />
        <Route path="/menu1/submenu2" exact component={Submenu2} />
        <Route path="/menu1/submenu3" exact component={Submenu3} />
      </Switch>
    </Router>
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
