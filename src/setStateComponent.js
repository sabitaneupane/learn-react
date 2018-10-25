import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class SetStateComponent extends Component {
	render(){
		return(
			<div className="well">
				{this.props.children}
				<br/><br/>
				<button className="btn btn-primary"> Edit </button>
				<button className="btn btn-danger"> Remove </button>
			</div>
		);
	}
}



ReactDOM.render(
	<div>
		<SetStateComponent> Hey </SetStateComponent>
		<SetStateComponent> Hi  </SetStateComponent>
		<SetStateComponent> Hello </SetStateComponent>
	</div>, 
  document.getElementById('root')
);