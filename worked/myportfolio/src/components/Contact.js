import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {

    render() {
        return (
            <div className="main-contact">
             <Grid className="grid-contact">
               <Cell col={6}>
                 <h2>Vaheed Akhtar</h2>
                 <img 
                   src="http://theisozone.com/forum/download/file.php?avatar=189921_1502909135.png"
                   alt="avatar"
                   style={{height: '250px'}}
                   />
                   <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                     Currently working as a software developer,
                     have skills Java, SQL, HTML, CSS, JavaScript, React js,
                     Angular Js, Node Js.
                   </p>
               </Cell> 
               <Cell col={6}>
                 <h2>Contact Me</h2>
                 <hr/>
              <div className="contact-list">
                <List>
                <ListItem>
                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                     <i className="fa fa-phone-square" area-hidden="true"/>
                       1234567890
                    </ListItemContent>
                </ListItem>

                <ListItem>
                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                     <i className="fa fa-fax" area-hidden="true"/>
                       1234567890
                    </ListItemContent>
                </ListItem>

                <ListItem>
                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                     <i className="fa fa-envelope" area-hidden="true"/>
                       akhtarvahid543@gmail.com
                    </ListItemContent>
                </ListItem>

                <ListItem>
                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                     <i className="fa fa-skype" area-hidden="true"/>
                       vaheedakhtar2
                    </ListItemContent>
                </ListItem>
                
                </List>
               </div>
               </Cell>  
             </Grid>
            </div>
        );
    }
}

export default Contact;