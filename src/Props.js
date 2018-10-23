import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Props extends Component {
  render() {
    return (
      <div className="container"> 
        <p>
          <b> Movie name: </b> {this.props.title}
            <br/> 
          <b> Movie Genre: </b> {this.props.genre}
        </p>
        <hr/>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <Props title="The social networking" genre="Documentary"/>
    <Props title="Avatar" genre="Sci-fiction"/>
    <Props title="Titanic" genre="Drama, Romantic"/>
  </div>, 
  document.getElementById('root')
);
