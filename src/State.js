import React , {Component} from 'react';
import ReactDOM from 'react-dom';


class State extends Component{

	constructor(){
		{/* Initializing constructor and value of count*/}	
		super();
		this.state = { count:0 };
	}

	UpdateClickCount(){
		{/* Incrementing number of button clikced*/}
		this.setState( (prevState) => {
			return { count: prevState.count + 1 };
		});
	}

	render(){
		return (
			<div>
				{/* Event handeler function to count number of button cliked */}	
				<button onClick={() => this.UpdateClickCount()}> Click me </button>
				
				{/* State of count: number of button clicked*/}	
				<p> Clicked {this.state.count} </p>
			</div>

		);
	}
}

ReactDOM.render(
	<State />,
	document.getElementById('root')
);

