import React, {Component} from 'react';

class OtherChild extends Component {
    render() {
      return (
        <div>
          <h2>OtherChild</h2>
          <p> Value in OtherChild Props: <b> {this.props.passedVal}  </b> </p>
        </div>
      )
    }
  }

export default OtherChild;
