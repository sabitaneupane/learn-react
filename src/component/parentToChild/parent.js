
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Child from './child.js';
import OtherChild from './otherChild.js';
import AnotherChild from './anotherChild.js';


class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fieldVal: ""
    }
  }

  onUpdate = (val) => {
    this.setState({
      fieldVal: val
    })
  };

  render() {
    return (
      <div className="container well jumbotron">
        <AnotherChild passingvalue="Passing props value from parent to child" />
        <br/>
        <h2>Parent</h2>
        <p> Value in Parent Component State: <b> {this.state.fieldVal} </b> </p>
        <hr/> <br/>
        <Child onUpdate={this.onUpdate} />
        <hr/> <br/>
        <OtherChild passedVal={this.state.fieldVal} />
      </div>
    )
  }
}
ReactDOM.render(
  <Parent />,
  document.getElementById('root')
);  