import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';


const API = 'http://localhost:3000/auth'

class EmployerLoginForm extends Component {
  state = {
    name: '',
    password: '',
    isLoggedIn: false,
    employer: {},
    userType: 'employer'
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }
    let resp = await fetch(API, reqObj)
    let data = await resp.json()
    console.log('token data', data)
    localStorage.setItem('token', data.token)
    this.setState({
      employer: data.employer,
      isLoggedIn: true
    })
    this.props.history.push({pathname: '/employerPage', state: {employer: this.state.employer}})
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    console.log('Employer login form state', this.state)
    return(
      <div>
        <h1>Employer Login page</h1>  
        <Form onSubmit={this.handleSubmit}>
        <Label>Name</Label>
        <Input required type="text" name="name" id="name" onChange={this.handleChange}/>
        <Label>Password</Label>
        <Input required type="text" name="password" id="password" onChange={this.handleChange} value={this.state.password}/>
        <Button>Submit</Button>
        </Form>
        <br></br>
        <Link to="/newEmployer" className="btn btn-outline-success my-2 my-sm-0">New Employer</Link>
      </div>
    )
  }
}

export default EmployerLoginForm
