import React, {Component} from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

export default class JobsIndex extends Component {
    constructor(props) {
        super(props)
    }

    handleApply = (e) => {
        e.preventDefault()

        const newApplication = {applicant_id: this.props.user.id, job_id: this.props.job.id}
        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                applicant_id: newApplication.applicant_id,
                job_id: newApplication.job_id
            })
        }

        fetch('http://localhost:3000/job_applicants', reqObj)
        .then(resp => resp.json())
        .then(data => console.log(data))
    }

    render() {
        console.log("Props in JobsIndex", this.props)
        return(
            <div>
                <div className="ui cards" id="job-cards">
                    <div className="card" id="job-card">
                        <div className="content">
                        <div className="header">Job Title: {this.props.job.title}</div>
                        <div className="meta">Company: {this.props.job.employer.name}</div>
                        <div className="meta"> Field: {this.props.job.field}</div>
                        <div className="description">Job Description: {this.props.job.description}</div>
                        <Link to='/yourJobs' onClick={this.handleApply} className="btn btn-outline-success my-2 my-sm-0">Apply</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}