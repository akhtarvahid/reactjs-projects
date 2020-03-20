import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./Root.css";
import Sidebar from "../components/sidebar/Sidebar";
import Page1 from "../components/page1/Page1";
import Sub1 from "../components/page1/Sub1";
import Sub2 from "../components/page1/Sub2";
import Header from "../components/Header";
import Page2 from "../components/page2/Page2";
import Page3 from "../components/page3/Page3";
import Page4 from "../components/page4/Page4";
import Page5 from "../components/page5/Page5";
import Page6 from "../components/page6/Page6";
import Page7_Sass from "../components/page7-sass/Page7_Sass";
import ReactNewFeature from "./../components/page8/ReactNewFeature";
import CssExamples from "./../components/page9/CssExamples";
import StyledComponent from "./../components/page10/StyledComponent";
import Pagination from "../components/page11/Pagination";
import Search from "../components/page12-search/Search";
import AutoSuggest from "../components/page13-autosuggest/Index";

export default class Root extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/" exact component={Sidebar} />
              <Route path="/sidebar" exact strict component={Sidebar} />
              <Route path="/sidebar/:id" exact strict component={Sidebar} />
              <Route path="/page1" exact strict component={Page1} />
              <Route path="/page1/sub1" exact strict component={Sub1} />
              <Route path="/page1/sub2" exact strict component={Sub2} />
              <Route path="/page2" exact strict component={Page2} />
              <Route path="/page3" exact strict component={Page3} />
              <Route path="/page4" exact strict component={Page4} />
              <Route path="/page5" exact strict component={Page5} />
              <Route path="/page6" exact strict component={Page6} />
              <Route path="/page7-sass" exact strict component={Page7_Sass} />
              <Route
                path="/new-feature"
                exact
                strict
                component={ReactNewFeature}
              />
              <Route path="/css" exact strict component={CssExamples} />
              <Route path="/sc" exact strict component={StyledComponent} />
              <Route path="/pagination" exact strict component={Pagination} />
              <Route path="/search" exact strict component={Search} />
              <Route path="/autosuggest" exact strict component={AutoSuggest} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
