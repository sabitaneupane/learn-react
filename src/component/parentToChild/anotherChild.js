import React, {Component} from 'react';

class AnotherChild extends Component {
    render() {
      return (
        <div>
          <blockquote>{this.props.passingvalue} </blockquote>
        </div>
      )
    }
  }

export default AnotherChild;
