import React, {Component} from 'react';

export default class JobsIndex extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return(
            <div>
                <div className="ui cards" id="job-cards">
                    <div className="card" id="job-card">
                        <div className="content">
                        <div className="header">Job Title: {this.props.job.title}</div>
                        <div className="meta">Company: {this.props.job.employer.name}</div>
                        <div className="meta"> Field: {this.props.job.field}</div>
                        <div className="description">Job Description: {this.props.job.description}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}