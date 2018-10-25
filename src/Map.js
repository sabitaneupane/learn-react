import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Map extends Component{

	render(){
		const people = ['Keshav' , 'Suman' , 'Indira' , 'Sabita'];

		const peopleList = people.map
							(
								(person) => <li> {person} </li>
							);

		return(
			<div className="well">
				<ul>{peopleList}</ul>
			</div>
		);
	}

}

ReactDOM.render(
	<Map />,
	document.getElementById('root')
);