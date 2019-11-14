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
    usertype: 'employer',
    error: false
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
    if(this.state.employer) {
      this.props.handleLogin(data.employer)
      this.props.history.push({pathname: '/employerPage', state: {employer: this.state.employer}})
    } else {
      console.log('incorrect password')
      this.setState({
        employer: {},
        password: '',
        error: true
      })
      this.props.history.push('/employerLoginForm')
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return(
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Employer Login Page</h1>
          </div>
        </div> 
        {this.state.error ? 
          <div className="alert alert-danger" role="alert">Incorrect username or password</div>
         : null}
        <Form onSubmit={this.handleSubmit} className="login-form">
        <Label>Company Name</Label>
        <Input required type="text" name="name" id="name" onChange={this.handleChange}/>
        <Label>Password</Label>
        <Input required type="password" name="password" id="password" onChange={this.handleChange} value={this.state.password}/>
        <Button>Submit</Button>
        </Form>
        <br></br>
        <Link to="/newEmployer" className="btn btn-outline-success my-2 my-sm-0">Sign up as a New Employer</Link>
      </div>
    )
  }
}

export default EmployerLoginForm
