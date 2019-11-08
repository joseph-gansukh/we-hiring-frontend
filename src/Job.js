import React, { Component } from 'react'
import JobsIndex from './components/JobsIndex'

const API = 'http://localhost:3000/jobs'

class Job extends Component {
  state = {
    jobs: []
  }

  async componentDidMount() {
    let resp = await fetch(API)
    let jobs = await resp.json()
    this.setState({
      jobs
    })
  }

  render() {
    console.log("this.state.jobs", this.state.jobs)

    const jobs = this.state.jobs.map(job => {
      return <JobsIndex job={job} />
    })

    return (
      <div className='jobs-container'>
        {jobs}
      </div>
    )
  }
}

export default Job