import React, {Component} from 'react'


class SearchForm extends Component {
  render() {

    return(
      <div className="search-form">
        <div className="search-items">
          <form>
            <label>Job Search</label>
            <div className="form-inputs">
            <label>Field</label>
            <input type="text" name="field"/>
            <label>Location</label>
            <input type="text" name="location"/>
            <label>Pay</label>
            <input type="text" name="pay"/>
            
            </div>
            <input type="submit" value="Search"/>
          </form>
        </div>
      </div>
    )
  }
}

export default SearchForm