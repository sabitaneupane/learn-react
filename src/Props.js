import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Props extends Component {
  render() {
    return (
      <div className="container"> 
        <div className="row">
          <div className="col-xs-6">
          <b> Movie name: </b> 
             
             {/* Adding movie title using Props attribute */}
             {this.props.title}
            <br/> 
          <b> Movie Genre: </b> 

             {/* Adding movie genre using Props attribute */}
            {this.props.genre}
          </div> 

          <div className="col-xs-6">
            Rating: 

             {/* Adding movie rating using Props children */}
             {this.props.children}
          </div>
        </div>
        <hr/>
      </div>
    );
  }
}

ReactDOM.render(
  <div>

     {/* Passing movie title and genre using attribute */}
     {/* Passing movie rating using children */}

    <Props title="The social networking" genre="Documentary"> 
      8
    </Props>

    <Props title="Avatar" genre="Sci-fiction">
     9
    </Props>

    <Props title="Titanic" genre="Drama, Romantic">
     7
    </Props>

  </div>, 
  document.getElementById('root')
);
