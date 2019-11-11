import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

const API = 'http://localhost:3000/applicants/'

class ApplicantLoginForm extends Component {
  state = {
    name: '',
    isLoggedIn: false,
    applicant: {}
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    let resp = await fetch(`${API}${e.target.name.value}`)
    let data = await resp.json()
    this.setState({
      applicant: data,
      isLoggedIn: true
    })
    console.log(this.state.applicant)
    this.props.history.push({pathname: '/yourJobs', state: {applicant: this.state.applicant}})
  }

  render() {
    return(
      <div>
        <h1>Applicant Login page</h1>  
        <Form onSubmit={this.handleSubmit}>
        <Label>UserName</Label>
        <Input required type="text" name="name" id="name" onChange={this.handleChange}/>
        <Label>Password</Label>
        <Input required type="text" name="location" id="location" onChange={this.handleChange} value={this.state.location}/>
      <Button>Submit</Button>
      </Form>
      <br></br>
      <Link to="/newApplicant" className="btn btn-outline-success my-2 my-sm-0">New Applicant</Link>
      </div>
    )
  }
}

export default ApplicantLoginForm