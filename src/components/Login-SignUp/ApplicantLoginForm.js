import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

const API = 'http://localhost:3000/auth/'

class ApplicantLoginForm extends Component {
  state = {
    name: '',
    password: '',
    isLoggedIn: false,
    applicant: {},
    applicantUser: false,
    usertype: 'applicant'
  }

  handleSubmit = async (e) => {
    e.preventDefault()
   const reqObj = {
    method: 'POST',
    headers: {
      'Content-Type': `application/json`
    },
    body: JSON.stringify(this.state)
   }
    let resp = await fetch(API, reqObj)
    let data = await resp.json()
    localStorage.setItem('token',data.token)
    this.setState({
      applicant: data.banana,
      isLoggedIn: true,
      applicantUser: true
    })
    this.props.handleLogin(data.banana)
    this.props.history.push({pathname: '/yourJobs', state: {applicant: this.state.applicant}})
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  render() {
    return(
      <div>
        <h1>Applicant Login page</h1>  
        <Form onSubmit={this.handleSubmit}>
        <Label>UserName</Label>
        <Input required type="text" name="name" id="name" onChange={this.handleChange}/>
        <Label>Password</Label>
        <Input required type="password" name="password" id="password" onChange={this.handleChange} value={this.state.password}/>
      <Button>Submit</Button>
      </Form>
      <br></br>
      <Link to="/newApplicant" className="btn btn-outline-success my-2 my-sm-0">New Applicant</Link>
      </div>
    )
  }
}

export default ApplicantLoginForm