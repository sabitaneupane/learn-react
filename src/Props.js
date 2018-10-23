import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Props extends Component {
  render() {
    return (
      <div className="container"> 
        <p>
          <b> Movie name: </b> 
             
             {/* Adding movie title using Props */}
             {this.props.title}
            <br/> 
          <b> Movie Genre: </b> 

             {/* Adding movie genre using Props */}
            {this.props.genre}
        </p>
        <hr/>
      </div>
    );
  }
}

ReactDOM.render(
  <div>

     {/* Passing movie title and genre using attribute */}
     
    <Props title="The social networking" genre="Documentary"/>
    <Props title="Avatar" genre="Sci-fiction"/>
    <Props title="Titanic" genre="Drama, Romantic"/>
  </div>, 
  document.getElementById('root')
);
