import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class UpdateData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Test user',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.logChange = this.logChange.bind(this)
    }

    componentDidMount() {
        this.FetchData();
    }
  
    // FetchData(){
    //     axios("https://reqres.in/api/users/2",{ method: 'GET' })
    //       .then(res => {
    //         this.setState({
    //           name: res.data.first_name,
    //           isLoaded: true
    //         });
    //           console.log(res.data);

    //       })
    // } 

    FetchData(){
      axios.get("https://reqres.in/api/users/2",{ method: 'GET' })
      .then(res => {
        this.setState({
          name: res.data.first_name,
          isLoaded: true
        });
      })
    }


    handleSubmit(event) {
        event.preventDefault()
       
        var data = {
            name: this.state.name
        }

        console.log(data)

        axios("https://reqres.in/api/users/2", {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => {
            return res.json
          })
    }

    logChange(event) {
        this.setState({[event.target.name]: event.target.value});  
    }

    render() {
        return (
            <div className="container register-form">
                <form onSubmit={this.handleSubmit} method="POST">
                    <label>Name</label>
                    <input onChange={this.logChange} className="form-control" name='name' />
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