import React, { Component } from "react";
import swal from "sweetalert";
export default class Page1 extends Component {
  handleConfirm = () => {
    swal({
      title: "Are you sure?",
      text:
        "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true
    }).then(willDelete => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success"
        });
      } else {
        swal("You have cancelled");
      }
    });
  };
  render() {
    return (
      <div>
        <h6>Page1</h6>
        <button onClick={this.handleConfirm}>Click</button>
        <hr />
      </div>
    );
  }
}
