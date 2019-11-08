import React, {Component} from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';


export default class Navbar extends Component {
  render() {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="./">We Hirin'</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li> */}
            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
            </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li> */}
          </ul>
          {/* <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> 
        </form> */}
          <Link to="/jobs" onClick={this.handleJobClick} className="btn btn-outline-success my-2 my-sm-0">Jobs</Link>
          <Link to="/newApplicant" onClick={this.handleNewApplicant} className="btn btn-outline-success my-2 my-sm-0">New Applicant</Link>
          <Link to="/newJob" onClick={this.handleNewJob} className="btn btn-outline-success my-2 my-sm-0">Post New Job</Link>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
        </div>
      </nav>
    )
  }
}