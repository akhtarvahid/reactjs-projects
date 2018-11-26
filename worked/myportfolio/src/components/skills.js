import React, { Component } from 'react';
import {Grid, Cell, ProgressBar} from 'react-mdl';
class skills extends Component {
    render() {
        return (
          <Grid>
            <Cell>
             <div style={{display:'flex'}}>{this.props.skill}
             <ProgressBar style={{margin:'auto', width:'75%'}}
              progress={this.props.progress} />
             </div>   
            </Cell>  
          </Grid>  
        );
    }
}

export default skills;