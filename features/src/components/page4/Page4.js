import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class Page4 extends Component {
  constructor(props) {
    console.log("parent constructor");
    super(props);
    this.state = { fromChild: "", num: 0 };
  }
  static getDerivedStateFromProps() {
    console.log("parent getDerivedStateFromProps rendering");
    return null;
  }
  componentDidMount() {
    console.log("parent componentDidMount rendering");
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("parent getSnapshotBeforeUpdate");
    console.log(prevProps, prevState);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("parent shouldComponentUpdate");
    return true;
  }
  componentDidUpdate() {
    console.log("parent componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("parent componentWillUnmount");
  }

  handleChange = e => {
    this.setState({ fromChild: e });
  };

  render() {
    console.log("parent render()");
    const { fromChild } = this.state;

    return (
      <div>
        <ChildComponent
          handleChange={this.handleChange}
          name={this.state.fromChild}
        />
        <span>received from ChildComponent:</span> <strong>{fromChild}</strong>
        <hr />
        <h3>{this.state.num}</h3>
        <hr />
      </div>
    );
  }
}
