import React from 'react';
import ReactDOM from 'react-dom';

class HandlingData extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: ''
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({data: event.target.value.toUpperCase()});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.data);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.data} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
            
          <p>You typed: <code>{this.state.data}</code> </p>
        </form>
      );
    }
  }


  ReactDOM.render(
    <HandlingData />,
    document.getElementById('root')
  );