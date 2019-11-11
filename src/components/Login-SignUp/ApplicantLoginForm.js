import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';


class ApplicantLoginForm extends Component {
  state = {

  }

  handleSubmit = (e) => {
    console.log(e)
  }

  render() {
    return(
      <div>
        <h1>Applicant Login page</h1>  
        <Form onSubmit={this.handleSubmit}>
        <Label>UserName</Label>
        <Input required type="text" name="name" id="name" onChange={this.handleChange} value={this.state.name}/>
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