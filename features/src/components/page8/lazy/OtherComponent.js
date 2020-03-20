import React, { Component } from "react";

class OtherComponent extends Component {
  state = {
    arr: [{ name: "ABC" }, { name: "XYZ" }, { name: "123" }, { name: "$@#" }]
  };
  render() {
    return (
      <div>
        <h3>Other compnent example</h3>
        {this.state.arr.map(a => (
          <h4 style={style} key={a.name}>
            {a.name}
          </h4>
        ))}
      </div>
    );
  }
}
const style = {
  borderBottom: "1px solid lightgrey",
  background: "aliceblue"
};
export default OtherComponent;
