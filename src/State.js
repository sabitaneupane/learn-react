import React , {Component} from 'react';
import ReactDOM from 'react-dom';


class State extends Component{
	constructor(){
		super();
		this.state = { count:0 };
	}

	UpdateClickCount(){
		this.setState( (prevState) => {
			return { count: prevState.count + 1 };
		});
	}

	render(){
		return (
			<div>
				<button onClick={() => this.UpdateClickCount()}> Click me </button>
				<p> Clicked {this.state.count} </p>
			</div>

		);
	}
}

ReactDOM.render(
	<State />,
	document.getElementById('root')
);

