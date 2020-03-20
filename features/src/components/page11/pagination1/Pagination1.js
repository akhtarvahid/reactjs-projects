import React from "react";
import "./Pagination1.css";

class Pagination1 extends React.Component {
  state = {
    users: null,
    total: null,
    per_page: null,
    current_page: null,
    loading: true
  };
  componentDidMount() {
    this.makeHttpRequestWithPage(1);
  }
  makeHttpRequestWithPage = async pageNumber => {
    let response = await fetch(
      `https://reqres.in/api/users?page=${pageNumber}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    );

    const data = await response.json();

    this.setState({
      users: data.data,
      total: data.total,
      per_page: data.per_page,
      current_page: data.page,
      loading: false
    });
  };
  render() {
    let users, renderPageNumbers;

    if (this.state.users !== null) {
      users = this.state.users.map(user => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.first_name}</td>
          <td>{user.last_name}</td>
        </tr>
      ));
    } else {
      users = (
        <tr>
          <td>Loading...</td>
        </tr>
      );
    }

    const pageNumbers = [];
    if (this.state.total !== null) {
      for (
        let i = 1;
        i <= Math.ceil(this.state.total / this.state.per_page);
        i++
      ) {
        pageNumbers.push(i);
      }

      renderPageNumbers = pageNumbers.map(number => {
        let classes = this.state.current_page === number ? "active" : "";

        if (
          number === 1 ||
          number === this.state.total ||
          (number >= this.state.current_page - 2 &&
            number <= this.state.current_page + 2)
        ) {
          return (
            <span
              key={number}
              className={classes}
              onClick={() => this.makeHttpRequestWithPage(number)}
            >
              {number}
            </span>
          );
        }

        return null;
      });
    }
    return (
      <div className="app">
        <table className="table">
          <thead>
            <tr>
              <th>S/N</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>{users}</tbody>
        </table>

        <div className="pagination">
          <button
            onClick={() =>
              this.makeHttpRequestWithPage(this.state.current_page - 1)
            }
            disabled={this.state.current_page === 1 ? true : false}
          >
            &laquo;
          </button>
          {renderPageNumbers}
          <button
            onClick={() =>
              this.makeHttpRequestWithPage(this.state.current_page + 1)
            }
            disabled={
              this.state.current_page * this.state.per_page === this.state.total
                ? true
                : false
            }
          >
            &raquo;
          </button>
        </div>
        <hr />
      </div>
    );
  }
}

export default Pagination1;
