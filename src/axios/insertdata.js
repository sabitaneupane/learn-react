import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class InsertData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            job: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.logChange = this.logChange.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
       
        var data = {
            name: this.state.name,
            job: this.state.job
        }

        console.log(data)

        axios("https://reqres.in/api/users", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
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
                    <label>Job</label>
                    <input onChange={this.logChange} className="form-control" value={this.state.job} name='job' />
                    <div className="submit-section">
                        <button className="btn btn-uth-submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

  ReactDOM.render(
    <InsertData />,
    document.getElementById('root')
  );