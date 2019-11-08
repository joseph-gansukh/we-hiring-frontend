import React, {Component} from 'react';
import Navbar from './Navbar'


export default class JobsIndex extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        // const jobsData = this.props.jobs.map(job => {
        //     return job
        // })
        console.log('JobsIndex',this.props.job)

        return(
            <div>
                <div className="ui cards">
                    <div className="card">
                        <div className="content">
                        <div className="header">Job Title: {this.props.job.title}</div>
                        <div className="meta">Friend</div>
                        <div className="description">Job Description: {this.props.job.description}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}