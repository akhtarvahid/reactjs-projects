import React, { Component } from "react";

export default class ChildComponent extends Component {
  state = {
    selected: ""
  };
//   static getDerivedStateFromProps() {
//     console.log("chid getDerivedStateFromProps rendering");
//     return null;
//   }
//   componentDidMount() {
//     console.log("child componentDidMount rendering");
//   }

  change = e => {
    this.props.handleChange(e.target.value);
    this.setState({ selected: e.target.value });
  };
  render() {
    // console.log("child render()");
    return (
      <div>
        <select value={this.state.selected} onChange={this.change}>
          {[
            "SelectCity",
            "Banglore",
            "Kolkata",
            "Allahabd",
            "Durgapur",
            "Hydrabad",
            "Delhi"
          ].map(a => (
            <option value={a} key={a}>
              {a}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
