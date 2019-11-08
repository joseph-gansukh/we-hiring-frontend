import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const API = 'http://localhost:3000/jobs/'

class JobForm extends Component {

  state = {
    title: '',
    description: '',
    employer_id: 1
  }


  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)

    const newJob = {name: this.state.title, location: this.state.description, employer_id: 1}
    
    const reqObj = {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        job: newJob
      })
    }

    fetch(API, reqObj)
    .then(resp => resp.json())
    .then(data => console.log(data))

    this.setState({
      title: '', 
      description: '',
      employer_id: 1
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
        <Label>Job Title</Label>
        <Input required type="text" name="title" id="title" onChange={this.handleChange} value={this.state.title}/>
        <Label>Description</Label>
        <Input required type="text" name="description" id="description" onChange={this.handleChange} value={this.state.description}/>
      <Button>Submit</Button>
    </Form>
    )
  }
}

export default JobForm