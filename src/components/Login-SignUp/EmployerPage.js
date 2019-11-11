import React from 'react'

function EmployerPage(props) {
  console.log(props.location.state.employer)
  console.log("Applicants", props.location.state.employer.jobs[0].applicants[0].name)
  const employer = props.location.state.employer
  const jobs = employer.jobs.map(job => {
    const applicants = job.applicants.map(applicant => {
      return <div>{applicant.name}</div>
    })
    return (
      <div>
        <div>Job: {job.title}</div>
        <div>Desctiption: {job.description}</div>
        <div>Applicants: {applicants}</div>
      </div>
    )
  })
  return(
    <div>
      <h1>Employer: {employer.name}</h1>
      <div>Field: {employer.field}</div>
      <div>Location: {employer.location}</div>
      <h2>Posted Jobs</h2>
      {jobs}
    </div>
  )
}

export default EmployerPage

