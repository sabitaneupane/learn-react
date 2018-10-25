import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class SetStateComponent extends Component {

	constructor(props){
		super(props);
		this.state = { editing:false };

		this.edit = this.edit.bind(this);
		this.save = this.save.bind(this);
	}

	edit(){
		this.setState({editing: true});
	}

	save(){
		this.setState({editing: false});
	}

	remove(){
		alert('removing');
	}

	renderNormal(){
		return (
			<div className="well">
				{this.props.children}
				<br/><br/>
				<button onClick={this.edit} className="btn btn-primary"> Edit </button>
				<button onClick={this.remove} className="btn btn-danger"> Remove </button>
			</div>
		);
	}

	renderForm(){
		return (
			<div className="well">
				<textarea defaultValue={this.props.children}></textarea>
				<br/><br/>
				<button onClick={this.save} className="btn btn-success"> Save </button>
			</div>
		);
	}

	render(){
		if(!this.state.editing){
			return this.renderNormal();
		}else{
			return this.renderForm();
		}	
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