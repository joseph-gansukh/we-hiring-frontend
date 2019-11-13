import React from 'react'
import JobsIndex from './JobsIndex'

class SearchResult extends React.Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    const jobs = this.props.location.state.filteredJobs.map(job => {
      return <JobsIndex job={job}/>
    })


    return(
      <div>
        {jobs}
      </div>
    )
  }
}

export default SearchResult