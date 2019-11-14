import React from 'react'
import JobsIndex from './JobsIndex'

class SearchResult extends React.Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props)
    const location = this.props.location.state.filteredJobs[0].employer.location
    const field = this.props.location.state.filteredJobs[0].field

    const jobs = this.props.location.state.filteredJobs.map(job => {
      return <JobsIndex job={job}/>
    })


    return(
      <div>
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">Search Results</h1>
    <p className="lead">Displaying posted job results for '{field}' jobs in '{location}'.</p>
            </div>
          </div> 
        <div>
          {jobs}
        </div>
      </div>
    )
  }
}

export default SearchResult