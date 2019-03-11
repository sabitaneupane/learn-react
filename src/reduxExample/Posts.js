import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Posts extends Component {

    constructor(props){
        super(props);
        this.state = {
            posts: []
        };
    }

    componentWillMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => this.setState({
            posts : data
        }));
    }


    render() {
        return (
            <div> 
                {
                    this.state.posts.map((data) => {
                        return(
                            <div key={data.id}>
                                <h1> {data.title} </h1>
                                <p> {data.body} </p> <hr/>
                            </div>
                        )
                    })
                }
            </div>
      );
    }
  }
ReactDOM.render(
  <Posts />, 
  document.getElementById('root')
);
