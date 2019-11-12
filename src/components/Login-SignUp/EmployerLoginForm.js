import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';


const API = 'http://localhost:3000/employers'

class EmployerLoginForm extends Component {
  state = {
    name: '',
    isLoggedIn: false,
    employer: {}
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // let resp = await fetch(`${API}/${e.target.name.value}`)
    // let data = await resp.json()
    fetch(`${API}/${e.target.name.value}`)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        employer: data,
        isLoggedIn: true
      })
      this.props.history.push({pathname: '/employerPage', state: {employer: this.state.employer}})
    })
    
  }

  render() {
    return(
      <div>
        <h1>Employer Login page</h1>  
        <Form onSubmit={this.handleSubmit}>
        <Label>Name</Label>
        <Input required type="text" name="name" id="name" onChange={this.handleChange}/>
        <Label>Password</Label>
        <Input required type="text" name="location" id="location" onChange={this.handleChange} value={this.state.location}/>
        <Button>Submit</Button>
        </Form>
        <br></br>
        <Link to="/newEmployer" className="btn btn-outline-success my-2 my-sm-0">New Employer</Link>
      </div>
    )
  }
}

export default EmployerLoginForm
