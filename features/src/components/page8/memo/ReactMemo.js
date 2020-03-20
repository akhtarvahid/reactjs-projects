import React, { Component } from 'react';

import Login from './LoginMemo';
import Profile from './ProfileMemo';

class ReactMemo extends Component {
  state = {
    isAuth: false,
    random: 0
  };

  login = () => {
    let val = Math.floor(Math.random()*10);
    console.log(val)
    this.setState({ isAuth: true });
  };

  logout = () => {
    this.setState({ isAuth: false });
  };

  render() {
    return (
      <React.Fragment>
        <Login
          authenticated={this.state.isAuth}
          onLogin={this.login}
          onLogout={this.logout}
          random={this.state.random}
        />
        <Profile authenticated={this.state.isAuth} />
      </React.Fragment>
    );
  }
}

export default ReactMemo;