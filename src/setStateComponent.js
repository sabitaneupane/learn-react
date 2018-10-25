import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class SetStateComponent extends Component {
	edit(){
		alert('editing');
	}

	remove(){
		alert('removing');
	}

	render(){
		return(
			<div className="well">
				{this.props.children}
				<br/><br/>
				<button onClick={this.edit} className="btn btn-primary"> Edit </button>
				<button onClick={this.remove} className="btn btn-danger"> Remove </button>
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