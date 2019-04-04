import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class FetchData extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        details: []
      };
    }
  
    componentDidMount() {
      this.FetchData();
    }

    FetchData(){
      axios.get("https://randomuser.me/api/?results=10",{ method: 'GET' })
      .then(res => {
        this.setState({
          details: res.data.results,
          isLoaded: true
        });
      })
    }
  
    render() {
      const { error, isLoaded, details } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {details.map(result => (
              <li key={result.email}>
                {result.email}
              </li>
            ))}
          </ul>
        );
      }
    }
  }


  ReactDOM.render(
    <FetchData />,
    document.getElementById('root')
  );