import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class BindData extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(event) {
        this.setState({data: event.target.value});
      }
    
      render() {
        return (
            <div>
                <label> Name: </label>
                <input type="text" value={this.state.data} onChange={this.handleChange} />
                    
                <p>You typed: <code>{this.state.data}</code> </p>
            </div>
            
        );
      }
    }
ReactDOM.render(
  <BindData />, 
  document.getElementById('root')
);
