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
                            <div className="header">Job Title: {job.title} </div>
                            <div className="meta">Company: {job.employer.name}</div>
                            <div className="meta">Field: {job.field}</div>
                            <div className="description">Job Description: {job.description} </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return(
        <div>
            <div className="applied-header"> Your Submitted Applications </div>
            {applicantData}
        </div>    
    )
}


export default JobApplications