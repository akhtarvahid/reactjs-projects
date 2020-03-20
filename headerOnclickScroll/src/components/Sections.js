import React, { Component } from "react";
import { FaUserTie } from "react-icons/fa";
import { Button } from "reactstrap";

class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { name, content } = this.props;
    return (
      <div>
        <header>{name}</header>
        <div className="sideSectionContent">{content}</div>
        <FaUserTie />
        <Button>s</Button>
      </div>
    );
  }
}

export default Detail;
