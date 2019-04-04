import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class DeleteData extends React.Component {
  constructor(props) {
    super(props);
  }

  DeleteData(){
      axios("https://reqres.in/api/users/2", {
        method: 'DELETE'
      }).then(function(response) {
          if (response.status >= 400) {
            throw new Error("Bad response from server");
          }else if(response.status == 204){
            console.log("Data deleted successfully");
          }
          return response.json();
      }).catch(function(err) {
          console.log(err)
      });
  }

  render() {
      return (
        <a onClick={() => this.DeleteData()} className="btn btn-primary">Delete</a>
      );
    }
  }


  ReactDOM.render(
    <DeleteData />,
    document.getElementById('root')
  );