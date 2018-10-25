import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Key extends Component{

	render(){
		const people = ['Keshav' , 'Suman' , 'Indira' , 'Sabita'];

		{/* Using key for unique identifier as Id */}

		const peopleList = people.map
							(
								(person , i) => <li key={i}> {person} </li>
							);

		return(
			<div className="well">
				<ul>{peopleList}</ul>
			</div>
		);
	}

}

ReactDOM.render(
	<Key />,
	document.getElementById('root')
);