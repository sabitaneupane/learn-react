import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class RefsClass extends Component {
  
  saveData(){
    var inputdata = this.refs.inputText.value;
    console.log(inputdata);
  }

  render() {
    return (
      <div className="well"> 
        <label> Text: </label>
        <input type="text" ref="inputText" /> 
        <button className="btn btn-success" onClick={this.saveData.bind(this)}> Save </button>
        <br />

        <p> View saved data in console </p>
      </div>
    );
  }
}

ReactDOM.render(
    <RefsClass />
  , 
  document.getElementById('root')
);