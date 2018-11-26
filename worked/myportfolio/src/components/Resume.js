import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return (
            <div>
              <Grid>
               <Cell col={4}>
                 <div style={{textAlign:'center'}}>
                 <img 
                   src="https://cdn.iconscout.com/public/images/icon/free/png-512/avatar-user-business-man-399587fe24739d5a-512x512.png"
                   alt="avatar"
                   style={{height: '200px'}}
                   />
                 </div>
                 <h2 style={{paddingTop:'2em'}}>St. John</h2>
                 <h4 style={{color:'grey'}}>Programmer</h4>
                 <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                 <p>React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications</p>
                 <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                 <h5>Address</h5>
                 <p>civil lines, Allahabad</p> 
                 <h5>Phone</h5>
                 <p>1234567890</p>
                 <h5>Email</h5>
                 <p>akhtarvahid543@gmail.com</p>
                 <h5>Web</h5>
                 <p>mywebsite.com</p>
                 <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>

               </Cell>
               <Cell col={8} className="resume-right">
                <h3>Education</h3>

                <Education 
                startYear={2013}
                endYear={2016}
                collageName='NIT Durgapur'
                CollageDescription="
                The National Institute of Technology Durgapur (abbreviated NIT Durgapur or NIT DGP) is a public engineering institution located in Durgapur, West Bengal, India. Formerly known as the Regional Engineering College, Durgapur (REC Durgapur), it is among the first 8 Regional Engineering Colleges established in India and was founded in 1960 by the then Chief Minister of West Bengal, Bidhan Chandra Roy. Today it is one of the 31 National Institutes of Technology in India and has been recognised as an Institute of National Importance by the Government of India under the National Institutes of Technology Act, 2007"/>
                 
                <Education 
                startYear={2010}
                endYear={2013}
                collageName='SHIATS'
                CollageDescription="
                Sam Higginbottom University of Agriculture, Technology and Sciences, formerly Allahabad Agricultural Institute, is an autonomous public minority university in Allahabad, India."/>
                
                <hr style={{borderTop: '3px solid #e22947'}}/>
                <h2>Experience</h2>
                <Experience 
                 startYear={2016}
                 status="working"
                 jobProfile="Software developer"
                 jobDescription="working as a software development"
                 />

                 <Experience 
                 startYear={2018}
                 status="working"
                 jobProfile="Software developer"
                 jobDescription="working as a software development"
                 />

                 <hr style={{borderTop: '3px solid #e22947'}}/>
                 <h2>Skills</h2>
                 <Skills 
                  skill="javaScript"
                  progress={100}/>
                <Skills 
                  skill="HTML/CSS"
                  progress={60}/>
                <Skills 
                  skill="React js"
                  progress={50}/>
                <Skills 
                  skill="Angular js"
                  progress={70}/>
                <Skills 
                  skill="Node js"
                  progress={50}/>
                <Skills 
                  skill="MongoDB"
                  progress={50}/>          

               </Cell>   
              </Grid>  
            </div>
        );
    }
}

export default Resume;