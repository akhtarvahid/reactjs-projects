import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron" style={{backgroundColor:'darkcyan', color:'white'}}>
    <h1>React Redux Project</h1>
    <p>React, Redux, React Router and Redux Thunk for ultra-responsive web apps.</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

export default HomePage;
