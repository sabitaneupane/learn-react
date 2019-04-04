import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class UpdateData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.logChange = this.logChange.bind(this)
    }

    componentDidMount() {
        this.FetchData();
    }
  
    FetchData(){
        fetch("https://reqres.in/api/users/2",{ method: 'GET' })
          .then(res => res.json())
          .then(
            (response) => {
              this.setState({
                name: response.data.first_name,
                isLoaded: true
              });
              console.log(response.data);
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
    } 

    handleSubmit(event) {
        event.preventDefault()
       
        var data = {
            name: this.state.name
        }

        console.log(data)

        fetch("https://reqres.in/api/users/2", {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        
        .then(function(response) { return response.json();})
        .then(function(data) {console.log(data)})
        .catch(function(err) {console.log(err)});
    }

    logChange(event) {
        this.setState({[event.target.name]: event.target.value});  
    }

    render() {
        return (
            <div className="container register-form">
                <form onSubmit={this.handleSubmit} method="POST">
                    <label>Name</label>
                    <input onChange={this.logChange} className="form-control" value={this.state.name} name='name' />
                    <div className="submit-section">
                        <button className="btn btn-primary">Update</button>
                    </div>
                </form>
            </div>
        );
    }
}

  ReactDOM.render(
    <UpdateData />,
    document.getElementById('root')
  );