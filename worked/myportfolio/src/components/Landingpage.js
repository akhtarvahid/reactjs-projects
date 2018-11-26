import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landingpage extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto'}}>
             <Grid className="landing-grid">
               <Cell col={12}>
                <img
                 src="http://theisozone.com/forum/download/file.php?avatar=189921_1502909135.png"
                 alt="profilepic"
                 className="profile-img"
                />
                <div className="banner-text">
                    <h1>Full Stack Web Developer</h1>

                    <hr />
                    <p>Java | SQL | HTML/CSS | Bootstrap | JavaScript | Angular |React | React Native | NodeJs | MongoDB </p>
                  <div className="social-links">
                    <a href="http://googel.com" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-linkedin-square" aria-hidden="true"/>  
                    </a>

                    <a href="http://googel.com" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-github-square" aria-hidden="true"/>  
                    </a>

                    <a href="http://googel.com" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-free-code-camp" aria-hidden="true"/>  
                    </a>  
                    <a href="http://googel.com" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-youtube-square" aria-hidden="true"/>  
                    </a>
                  </div>    
                </div>
               </Cell>
             </Grid>
            </div>
        );
    }
}

export default Landingpage;