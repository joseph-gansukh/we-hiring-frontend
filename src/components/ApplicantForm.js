import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const API = 'http://localhost:3000/applicants/'

class ApplicantForm extends Component {

  state = {
    name: '',
    location: ''
  }


  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)

    const newApplicant = {name: this.state.name, location: this.state.location}
    
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
    .then(data => console.log(data))

    this.setState({
      name: '', 
      location: ''
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>Applicant Name</Label>
        <Input required type="text" name="name" id="name" onChange={this.handleChange} value={this.state.name}/>
        <Label>Location</Label>
        <Input required type="text" name="location" id="location" onChange={this.handleChange} value={this.state.location}/>
      <Button>Submit</Button>
    </Form>
    )
  }
}

export default ApplicantForm