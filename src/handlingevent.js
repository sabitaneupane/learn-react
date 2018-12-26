import React from 'react';
import ReactDOM from 'react-dom';


class HandlingEvent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {isToggled: false};

    this.handleClick = this.handleClick.bind(this);

  }
    
    handleClick(e) {
      e.preventDefault();
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }
  
    render() {
      return (
        <div>
          <a href="#" onClick={this.handleClick}>
            Toggle
          </a>

          <p> {this.state.isToggleOn ? 'ON' : 'OFF'} </p>
        </div>
        
      );
    }
  }


ReactDOM.render(
    <HandlingEvent />,
    document.getElementById('root')
  );