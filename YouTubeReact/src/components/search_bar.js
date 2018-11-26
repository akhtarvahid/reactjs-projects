import React, { Component } from 'react';

class search_bar extends Component{
    state = {
        term:''
    }
    onInputChange(term) {
       this.setState({term});
       this.props.onSearchTermChange(term);
    }
    render(){
       
    return( 
    <div className="search-bar">    
      <input
         value={ this.state.term }
         onChange={(event) => this.onInputChange(event.target.value)} />
    </div>
    )
    };

}
export default search_bar;