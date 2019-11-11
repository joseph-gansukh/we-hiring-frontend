import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class EmployerLoginForm extends Component {
  state = {

  }

  render() {
    return(
      <div>
        <h1>Employer Login page</h1>  
        <Form onSubmit={this.handleSubmit}>
        <Label>UserName</Label>
        <Input required type="text" name="name" id="name" onChange={this.handleChange} value={this.state.name}/>
        <Label>Password</Label>
        <Input required type="text" name="location" id="location" onChange={this.handleChange} value={this.state.location}/>
      <Button>Submit</Button>
    </Form>
      </div>
    )
  }
}

export default EmployerLoginForm
