import React, { Component } from "react";

class Page7_Sass extends Component {
  state = {
    button1: false
  };
  render() {
    let renderFirst, renderSecond;
    const { button1 } = this.state;
    if (button1) {
      renderFirst = (
        <div>
          <p>variables</p>
          <div className="divVar">Hey, there</div>
          <hr />
          <p>Nesting</p>
          <nav className="mynav">
            <ul>
              <li>
                <a href="true">One</a>
              </li>
              <li>
                <a href="true">Two</a>
              </li>
              <li>
                <a href="true">Three</a>
              </li>
            </ul>
          </nav>
          <hr />
          <p>@imports and partials</p>
          <div className="importPartials">
            <button>@import1</button>
            <button>@import2</button>
          </div>
          <hr />
          <p>@mixin and @include</p>
          <div className="mixinInclude">
            <span>Header 1</span>
            <span>Header 2</span>
            <span>Header 3</span>
          </div>

          <hr />
          <p>@extend</p>
          <button className="one">One</button>
          <button className="two">Two</button>
          <button className="three">Three</button>
          <hr />
          <h2>Sass functions</h2>
          <div className="fn">
            <span>First</span>
            <span>Second</span>
          </div>
          <div className="builtIn">
            <span>Built in</span>
            <span>Map</span>
          </div>
          <hr />
        </div>
      );
    } else {
      renderSecond = (
        <div>
          <h3>Sass functions</h3>
          <h6>
            Color-Sass Set Color Functions, Sass Get Color Functions , Sass
            Manipulate Color Functions
          </h6>
          <div className="color-fn">
            <button>rgb(red, green, blue)</button>
          </div>
          <div className="string-fn">
            <span>Hello</span>
          </div>
        </div>
      );
    }

    return (
      <div className="main">
        {renderFirst}
        {renderSecond}
      </div>
    );
  }
}

export default Page7_Sass;
