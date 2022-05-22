import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props){
      super(props);

      this.state = { term: 'delhi', entered: false};
      this.onInputChange = this.onInputChange.bind(this);
      this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    componentDidMount() {
        // default city 
        this.props.fetchWeather(this.state.term);
    }

    onInputChange = (event) => {
        this.setState({term: event.target.value})
    }
    onFormSubmit(event){
       event.preventDefault();
       if(this.state.term) {
        this.props.fetchWeather(this.state.term);
        this.setState({entered: false})
       } else {
        this.setState({entered: true})
       }
       this.setState({term:''})
    }
    render() {
        const { entered } = this.state;
        return (
        <div className="search-box">    
        <h2 className="find-weather-text">Search your city weather</h2>
        <form className="input-group" onSubmit={this.onFormSubmit}>
         <input 
           placeholder="Get a five-day forecast in your favorite cities"
           className="form-control"
           value={this.state.term}
           onChange={this.onInputChange}/>
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>      
        </form>
        {entered && <div className="error">Please enter your city name</div>}
        </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);