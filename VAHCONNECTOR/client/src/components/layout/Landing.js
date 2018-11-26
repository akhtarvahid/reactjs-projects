import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './Landing.css';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Landing extends Component {
  componentDidMount(){
    if(this.props.auth.isAuthenticated){
      this.props.history.push('/dashboard');
    }
  }
  render() {
    return (
        <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
            <div className="col-md-12 text-center">
            <h1 className="display-4 mb-4">Socialize with Developers
            </h1>
            <p className="lead"> Create a developer profile/portfolio, share posts and get help from other developers</p>
            <hr />
            <NavLink to="/register" className="btn btn-lg btn-info mr-2">Sign Up</NavLink>
            <NavLink to="/login" className="btn btn-lg btn-light">Login</NavLink>
            <div align="center" style={{marginTop:50}}>
            <div className="typewriter">
             <h1 style={{fontSize:40}}>Let's explore our creativity</h1>
            </div>
            <hr />
            </div>

            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
  auth: state.auth
})
export default connect(mapStateToProps)(Landing);