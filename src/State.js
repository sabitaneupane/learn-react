import React , {Component} from 'react';
import ReactDOM from 'react-dom';


class State extends Component{
	UpdateClickCount(){
		alert('hey');
	}

	render(){
		return (
			<div>
				<button onClick={() => this.UpdateClickCount()}> Click me </button>
			</div>
		);
	}
}

ReactDOM.render(
	<State />,
	document.getElementById('root')
);

