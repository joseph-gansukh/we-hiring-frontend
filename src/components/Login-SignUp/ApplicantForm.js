import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const API = 'http://localhost:3000/applicants/'

class ApplicantForm extends Component {

  state = {
    name: '',
    location: '',
    password: '',
    usertype: 'applicant',
    loginStatus: "NOT_LOGGED_IN"
  }


  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const newApplicant = {name: this.state.name, location: this.state.location, password: this.state.password, usertype: this.state.usertype}
    
    const reqObj = {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        applicant: newApplicant
      })
    }

    fetch(API, reqObj)
    .then(resp => resp.json())
    .then(data => {
      localStorage.setItem('token',data.jwt)
    })
    
    this.setState({
      name: '', 
      location: '',
      password: '',
      loginStatus: "LOGGED_IN"
    })

    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">Create an Applicant Account</h1>
            </div>
          </div> 
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Label>Applicant Name</Label>
          <Input required type="text" name="name" id="name" onChange={this.handleChange} value={this.state.name}/>
          <Label>Location</Label>
          <Input required type="text" name="location" id="location" onChange={this.handleChange} value={this.state.location}/>
          <Label>Password</Label>
          <Input required type="password" name="password" id="password" onChange={this.handleChange} value={this.state.password}/>
        <Button>Submit</Button>
      </Form>
    </div>
    )
  }
}

export default ApplicantForm