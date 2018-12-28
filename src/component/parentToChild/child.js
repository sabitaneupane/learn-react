import React, {Component} from 'react';

class Child extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        fieldVal: ""
      }
    }
  
    update = (e) => {
      console.log(e.target.value);
      this.props.onUpdate(e.target.value);
      this.setState({fieldVal: e.target.value});
    };
  
    render() {
      return (
        <div>
          <h2>Child</h2>
          <input
            type="text"
            className="form-control"
            placeholder="type here"
            onChange={this.update}
            value={this.state.fieldVal}
          />

          <p> Value in Child Component State: <b> {this.state.fieldVal} </b> </p>

        </div>
      )
    }
  }

export default Child;
