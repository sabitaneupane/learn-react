import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Parent extends Component{

	render(){
		return(
			<div className="well">
                Hello
			</div>
		);
	}

}

ReactDOM.render(
	<Parent />,
	document.getElementById('root')
);