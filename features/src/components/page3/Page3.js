import React, { Component } from "react";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
export default class Page3 extends Component {
  state = {
    channelURL: [],
    startDate: new Date()
  };
  //   componentDidMount() {
  //     fetch("https://jsonplaceholder.typicode.com/todos")
  //       .then(response => response.json())
  //       .then(json =>
  //         this.setState({
  //           channelURL: json
  //         })
  //       );
  //   }
  handleInputChange = e => {
    this.setState({ input: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  render() {
    return (
      <div>
        <ClickCounter />
        <HoverCounter />
        <hr />
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              value={this.state.input || ""}
              onChange={this.handleInputChange}
              onKeyPress={this.handleInputChange}
            />
            {this.state.input || ""}
            <input type="submit" value="submit" />
          </form>
        </div>
        <hr />
        <h3>Date picker</h3>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          showTimeSelect
          includeTimes={[new Date()]}
          dateFormat="MMMM d, yyyy h:mm aa"
        />
      </div>
    );
  }
}
