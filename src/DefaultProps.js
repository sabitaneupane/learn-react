import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class DefaultProps extends Component {
  render() {
    return (
      <button> {this.props.text} </button>
    );
  }
}

DefaultProps.defaultProps = {
	text: 'A Default button'
};

ReactDOM.render(
  <div>
  	<DefaultProps />

  	<DefaultProps text="A Simple Button"/>
  </div>
  , 
  document.getElementById('root')
);