import React from 'react';
import ReactDOM from 'react-dom';

class State extends React.Component {

  constructor(props){
    super(props);
    this.state = {title: 'Best App'} ;
  }
	
  render() {
    return (
      <h1>
        {this.state.title}
      </h1>
    );
  }
}

ReactDOM.render( <State /> , document.getElementById('root'));