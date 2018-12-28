
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Child from './child.js';
import OtherChild from './otherChild.js';


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
      <div>
        <h2>Parent</h2>
        Value in Parent Component State: {this.state.fieldVal}
        <br/>
        <Child onUpdate={this.onUpdate} />
        <br />
        <OtherChild passedVal={this.state.fieldVal} />
      </div>
    )
  }
}
ReactDOM.render(
  <Parent />,
  document.getElementById('root')
);  