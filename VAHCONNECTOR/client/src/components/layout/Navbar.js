import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';
import imageicon from '../../img/logo.png';
// const imageicon = 'https://image.shutterstock.com/image-vector/letter-va-logo-colorful-geometric-260nw-1070827769.jpg'
class Navbar extends Component {
  onLogoutClick(e){
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <ul className="navbar-nav ml-auto">
      <li className="nav-item">
       <Link className="nav-link" to="/feed">
         Post Feed
       </Link>
      </li>
      <li className="nav-item">
       <Link className="nav-link" to="/dashboard">
         Dashboard
       </Link>
      </li>
      <li className="nav-item">
        <a href=" " 
           onClick={this.onLogoutClick.bind(this)}
           className="nav-link">
           <img 
           className="rounded-circle"
           src={user.avatar} 
           alt={user.name} 
           style={{marginRight:5, width:25}}
           title="you must have a Gravatar connected to
           your email to display an image"/>{' '}
           Logout
           </a>
      </li>
    </ul>
    );
    const guestLinks = (
      <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <NavLink className="nav-link" to="/register">Sign Up</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
    </ul>
    );
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-info mb-4">
        <div className="container">
          <NavLink className="navbar-brand" to="/" style={{marginRight:-50}}>
           <img style={{height:50, width:180, borderRadius:50}} src={imageicon} alt='icon' className="myicon"/>
           </NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
            <span className="navbar-toggler-icon"></span>
          </button>
    
          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/profiles"> Developers
                </NavLink>
              </li>
            </ul>
            {isAuthenticated ? authLinks : guestLinks }  
          </div>
        </div>
      </nav>
    )
  }
}
Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(Navbar);