import React, { Component } from 'react';
import '../App.css';
import SearchForm from './SearchForm';
import HomeInfo from './HomeInfo';
import Navbar from './Navbar'
import JobsIndex from './JobsIndex'
import Job from '../Job'

const API = 'http://localhost:3000/jobs'


class HomePage extends Component {

  handleJobclick = () => {
    console.log('click')
  }

  render() {
    return (
      <div>
        <div className="splash">
          <SearchForm />
          {/* <img className='splash' src={require('../img/splash.jpg')} /> */}
        </div>
        < HomeInfo />
        {/* <JobsIndex jobs={this.state.jobs} test={"test prop"} /> */}
      </div>
    )

  }
}
export default HomePage