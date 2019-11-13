import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const API = 'http://localhost:3000/employers/'

class EmployerForm extends React.Component {
  
  state = {
    name:'',
    password: '',
    field: '',
    location: '',
    userType: 'employer'
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault()

    const newEmployer = {name: this.state.name, password: this.state.password, field: this.state.field, location: this.state.location, userType: this.state.userType}

    const reqObj = {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        employer: newEmployer
      })
    }

    fetch(API, reqObj)
    .then(resp => resp.json())
    .then(data => {
      localStorage.setItem('token', data.jwt)
    })

    this.setState({
      name: '',
      password: '', 
      field: '',
      location: '',
    })
  }

  
  render() {
    return(
      <Form onSubmit={this.handleSubmit}>
        <h1>New Employer Form</h1>
        <Label>Employer Name</Label>
        <Input required type="text" name="name" id="name" onChange={this.handleChange} value={this.state.name}/>
        <Label>Password</Label>
        <Input required type="text" name="password" id="password" onChange={this.handleChange} value={this.state.password}/>
        <Label>Field</Label>
        <Input required type="text" name="field" id="field" onChange={this.handleChange} value={this.state.field}/>
        <Label>Location</Label>
        <Input required type="text" name="location" id="location" onChange={this.handleChange} value={this.state.location}/>
      <Button>Submit</Button>
    </Form>
    )
  }

}

export default EmployerForm