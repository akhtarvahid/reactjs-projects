import React, { Component } from "react";
import { connect } from "react-redux";
import { getItems, addItem, deleteItem } from "../../actions/Page5";

import "./Page5.css";

class Page5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ""
    };
    console.log("initialization");
  }
  componentDidMount() {
    console.log("componentDidMount called");
    this.props.getItems();
  }
  handleChange = e => {
    this.setState({ item: e.target.value });
  };
  edit = e => {
    this.setState({ item: e });
  };
  delete = item => {
    this.props.deleteItem(item);
  };
  handleSubmit = e => {
    e.preventDefault();
    const { item } = this.state;
    if (this.props.posts.includes(item) !== true) this.props.addItem(item);
  };
  render() {
    const { item } = this.state;
    console.log("render called");
    const { posts } = this.props;
    return (
      <div className="page5">
        <h2>React Redux crud</h2>
        <div className="container">
          <h4>Add Item</h4>
          <form onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              value={item}
              placeholder="Enter name"
              onChange={this.handleChange}
            />

            <input type="submit" value="Add" />
          </form>
          <hr />
          <div className="list">
            {posts
              ? posts.map(item => (
                  <div key={item}>
                    <div>{item}</div>
                    <div>
                      <span onClick={() => this.edit(item)}>Edit</span>
                      <span onClick={() => this.delete(item)}>X</span>
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
const mapStateToProps = state => ({
  posts: state.page5.posts
});
export default connect(
  mapStateToProps,
  { getItems, addItem, deleteItem }
)(Page5);
