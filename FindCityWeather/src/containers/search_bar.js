import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    state = {
      term: 'delhi', 
      entered: false
    }
    componentDidMount() {
        // default city 
        this.props.fetchWeather(this.state.term);
    }

    onInputChange = (event) => {
        this.setState({term: event.target.value})
    }
    onFormSubmit = (e) => {
       e.preventDefault();
       const { term } = this.state;

       if(term) {
        this.props.fetchWeather(term);
        this.setState({ entered: false});
       } else {
        this.setState({ entered: true});
       }
       this.setState({ term:'' });
    }
    render() {
        const { entered } = this.state;
        return (
        <div className="search-box">    
        <h2 className="find-weather-text">Check Your City Weather</h2>
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