import React from 'react'

const JobApplications = (props) => {
    console.log(props)
    let applicantProps = props.user.jobs
    console.log(applicantProps)
    let applicantData = applicantProps.map(job => {
        return(
            <div>
                <div className="ui cards" id="job-cards">
                    <div className="card" id="job-card">
                        <div className="content">
                            <div className="card-title">Job Title: {job.title} </div>
                            <div className="card-subtitle mb-2 text-muted">Company: {job.employer.name}</div>
                            <div className="card-subtitle mb-2 text-muted">Field: {job.employer.field}</div>
                            <div className="card-text">Job Description: {job.description} </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return(
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                <h1 className="display-4">Your Job Applications</h1>
                <p className="lead">View all of the jobs you have applied for</p>
                </div>
            </div> 
            {applicantData}
        </div>    
    )
}


export default JobApplications