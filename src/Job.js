import React, { Component } from 'react'

const API = 'http://localhost:3000/jobs'

class Job extends Component {
  state = {
    jobs: []
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(jobs => {
      this.setState({
        jobs
      })
    })
  }

  render() {
    console.log("this.state.jobs", this.state.jobs)

    const jobs = this.state.jobs.map(job => {
      return (
        'job: ' + job.title + ' desc: ' + job.description 
        )
    })
    return (
      <div>
        {jobs}
      </div>
    )
  }
}

export default Job