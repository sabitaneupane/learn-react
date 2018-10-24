import React , {Component} from 'react';
import ReactDOM from 'react-dom';


class State extends Component{
	render(){
		return (
			<div>
				<button> Click me </button>
			</div>
		);
	}
}

ReactDOM.render(
	<State />,
	document.getElementById('root')
);

