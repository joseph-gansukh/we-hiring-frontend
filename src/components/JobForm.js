import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// const API = 'http://localhost:3000/jobs/'

class JobForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      field: '',
      description: '',
      employer_id: ''
    }
  }


  handleSubmit = (e) => {
    e.preventDefault()
    const newJob = {title: this.state.title, field: this.state.field, description: this.state.description, employer_id: this.props.user.id}
    
    const reqObj = {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        job: newJob
      })
    }

    fetch('http://localhost:3000/jobs/', reqObj)
    .then(resp => resp.json())
    // .then(data => console.log(''))

    this.setState({
      title: '', 
      field: '',
      description: '',
      employer_id: ''
    })

    this.props.history.push('/jobs')

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
        <Label>Field</Label>
        <Input required type="text" name="field" id="field" onChange={this.handleChange} value={this.state.field}/>
        <Label>Description</Label>
        <Input required type="text" name="description" id="description" onChange={this.handleChange} value={this.state.description}/>
      <Button>Submit</Button>
    </Form>
    )
  }
}

export default JobForm