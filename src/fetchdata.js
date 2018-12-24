import React from 'react';
import ReactDOM from 'react-dom';


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
      fetch("https://randomuser.me/api/?results=2")
        .then(res => res.json())
        .then(
          (response) => {
            this.setState({
              details: response.results,
              isLoaded: true
            });
            console.log(response.results);
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
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