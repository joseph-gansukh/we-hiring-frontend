import React, {Component} from 'react'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      field: 'Tech',
      location: ''
    }
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSearch(this.state)
    // this.props.history.push({pathname: '/searchResults', state: {filteredJobs: this.props.filteredJobs}})
  }

  render() {
    return(
      <div className="search-form">
        <div className="search-items">
          <form onSubmit={this.handleSubmit}>
            <label className="search-label">Search for a Job</label>
            <div className="form-inputs">
            <select className="dropdown" name="field" onChange={this.handleChange}>
              <option value="tech">Tech</option>
              <option value="legal">Legal</option>
              <option value="legal">Healthcare</option>
            </select>
            <label>Location: </label>
            <input className="search-location" type="text" name="location" onChange={this.handleChange}/>
            {/* <label>Pay</label>
            <input type="text" name="pay"/> */}
            
            </div>
            <input type="submit" value="Search"/>
          </form>
        </div>
      </div>
    )
  }
}

export default SearchForm