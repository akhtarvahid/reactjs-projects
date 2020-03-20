import React from 'react';
import AppDragDropDemo from './DragDrop';

class Page6 extends React.Component {
    constructor(props) {
      super(props); 
      this.textInput = React.createRef();
      this.focusTextInput = this.focusTextInput.bind(this);
    }
    componentDidMount(){
      this.textInput.current.focus();
    }
  
    focusTextInput() { 
      this.textInput.current.focus();
    }
    render() { 
  
      return (
        <div>
          <div>Hello!</div>
          <input
            type="text"
            ref={this.textInput} /><br />
  
          <input
            type="button"
            value="Focus the text input"
            onClick={this.focusTextInput}
          />
          <hr />
          <AppDragDropDemo />
        </div>
      );
    }
  }
  
  export default Page6;