import React, { Component } from "react";
import "./Page2.css";

class Page2 extends Component {
  state = {
    arr: [],
    inputText: "",
    errors: {},
    marked: ""
  };

  handleInput = e => {
    this.setState({ inputText: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { inputText, arr, errors } = this.state;
    if (arr.includes(inputText) === false && inputText !== "") {
      arr.push(inputText);
      errors.error = "";
      this.setState({ arr, inputText: "", errors });
    } else {
      errors.error = "Please add unique item";
      this.setState({ errors });
    }
  };
  delete = item => {
    const { arr } = this.state;
    const res = arr.filter(a => a !== item);
    this.setState({ arr: res });
  };
  edit = item => {
    this.setState({ inputText: item });
  };
  mark = item => {
    this.setState({ marked: item });
  };
  render() {
    const { inputText, arr, errors, marked } = this.state;

    return (
      <div className="root">
        <header>Header</header>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="input-field">
              <label>Enter Text</label>
              <input
                type="text"
                value={inputText}
                onChange={this.handleInput}
              />
              {errors.error ? errors.error : ""}
            </div>
            <div className="input-field">
              <input type="submit" value="submit" />
            </div>
          </form>
          <div className="listing">
            {arr
              ? arr.map(item => (
                  <div
                    key={item}
                    style={{ background: item === marked ? "red" : "" }}
                    onDoubleClick={this.mark.bind(this, item)}
                  >
                    <div>{item}</div>
                    <div className="right">
                      <span onClick={this.delete.bind(this, item)}>X</span>
                      <span onClick={this.edit.bind(this, item)}>Edit</span>
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
    );
  }
}

export default Page2;
