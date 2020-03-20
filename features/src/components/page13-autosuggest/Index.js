import React, { Component } from 'react'
import AutoComplete from './AutoComplete';
import './index.css'
let names = [
            "Alligator",
            "Bask",
            "Crocodilian",
            "Death Roll",
            "Eggs",
            "Jaws",
            "Reptile",
            "Solitary",
            "Tail",
            "Wetlands",
            "Alligator2",
            "Bask2",
            "Crocodilian2",
            "Death Roll2",
            "Eggs2",
            "Jaws2",
            "Reptile2",
            "Solitary2",
            "Tail2",
            "Wetlands2",
            "Allahabad"
          ]
class AutoSuggest extends Component {
    constructor(props) {
        super(props)

        this.state = {
         
        }
    }

    render() {
        return (
            <div>
              <h3>React Autocomplete Demo</h3>
              <h4>Start typing and experience the autocomplete wizardry!</h4>
              <AutoComplete
                suggestions={names}
              />
               
            </div>
          );
        }
    }

export default AutoSuggest
