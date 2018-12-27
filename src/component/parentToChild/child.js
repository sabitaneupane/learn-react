import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Child extends Component{
	render(){
		return(
			<div className="well">
				Hey 
			</div>
		);
	}

}

ReactDOM.render(
	<Child />,
	document.getElementById('root')
);