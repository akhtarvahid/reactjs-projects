import React from "react";

const AboutPage = () => (
  <div>
    <h2 style={style.header}>About</h2>
    <p>
      This app uses React, Redux, React Router, and many other helpful
      libraries.
    </p>
    <p>And many more to come...</p>
    <small style={style.tunned}>Stay tuned!...</small>
  </div>
);

export default AboutPage;

const style = {
  header: {
    color: 'darkcyan'
  },
  tunned: {
    color: 'coral',
    backgroundColor: 'white',
    padding: '9px 20px',
    borderRadius: '5px',
    border: '2px solid coral'
  }
}
