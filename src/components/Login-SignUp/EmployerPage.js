import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

function EmployerPage(props) {
  const employer = props.location.state.employer
  const jobs = employer.jobs.map(job => {
    const applicants = job.applicants.map(applicant => {
      return <div>{applicant.name}</div>
    })
    return (
      <div>
          <div className="ui cards" id="job-cards">
              <div className="card" id="job-card">
                  <div className="content">
                      <h3 className="header">Job Title: {job.title} </h3>
                      <div className="meta">Desctiption: {job.description}</div>
                      <div className="description">Applicants: {applicants}</div>
                  </div>
              </div>
          </div>
      </div> 
    )
  })
  return(
    <div>
    <div className="ui cards" id="job-cards">
      <div className="card" id="job-card">
        <div className="content">
          <h1 className="header">Employer: {employer.name}</h1>
          <div>Field: {employer.field}</div>
          <div>Location: {employer.location}</div>
          <h2>Posted Jobs:</h2>
          {jobs}
        </div>
      </div>
    </div>
    </div>
  )
}

export default EmployerPage

