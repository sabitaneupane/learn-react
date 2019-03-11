import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Posts extends Component {

    componentWillMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data));
    }


    render() {
        return (
            <p> Posts </p>
        );
      }
    }
ReactDOM.render(
  <Posts />, 
  document.getElementById('root')
);
