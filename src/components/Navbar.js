import React, {Component} from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';


export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }
  }

  render() {
    console.log(this.state)
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="./">We Hirin'</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto"/>
          {/* currently hard coding isLoggedIn state. needs to pass from log in pages? */}
          {/* after figuring that out, conditionally render '/yourJobs' and post job for employers */}
          {/* Also needs double conditional that also checks if user is an applicant or an employer */}
          { this.state.isLoggedIn && <Link to="/newJob" className="btn btn-outline-success my-2 my-sm-0">Post New Job</Link>}
          <Link to="/jobs" className="btn btn-outline-success my-2 my-sm-0">Jobs</Link>
          {/* <Link to="/yourJobs" className="btn btn-outline-success my-2 my-sm-0">Your Applications</Link> */}
          {/* <Link to="/newJob" className="btn btn-outline-success my-2 my-sm-0">Post New Job</Link> */}
          <Link to="/applicantLoginForm" className="btn btn-outline-success my-2 my-sm-0">Sign In</Link>
          <Link to="/employerLoginForm" className="btn btn-outline-success my-2 my-sm-0">Employers / Post Job</Link>
        </div>
      </nav>
    )
  }
}