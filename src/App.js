import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container"> 
      	<div className="row">
	      <div className="col-md-6 col-xs-6"> 
	      	left
	      </div>
	      
	      <div className="col-md-6 col-xs-6">
	      	 right
	      </div>
      	</div> 
      </div>
    );
  }
}

export default App;
