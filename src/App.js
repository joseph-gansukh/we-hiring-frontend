import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Job from './Job';
import HomePage from './components/HomePage';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Navbar from './components/Navbar';
import ApplicantForm from './components/Login-SignUp/ApplicantForm'
import JobForm from './components/JobForm'
import ApplicantLoginForm from './components/Login-SignUp/ApplicantLoginForm'
import EmployerLoginForm from './components/Login-SignUp/EmployerLoginForm'
import JobApplications from './components/JobApplications'
import EmployerPage from './components/Login-SignUp/EmployerPage';
import EmployerForm from './components/Login-SignUp/EmployerForm'
import SearchResults from './components/SearchResults'


class App extends React.Component {
  
  constructor(){
    super();

    this.state = {
      auth: {}
    }
  }

  handleLogin = (user) => {
    this.setState({
      auth: user
    })
    console.log('handle login', this.state.auth)
  }

  handleLogout = () => {
    this.setState({
      auth: {}
    })
    localStorage.removeItem('token')
  }

  updateAuth = (user) => {
    this.setState({
      auth: user.applicant
    })
    console.log('update auth', this.state.auth)
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar user={this.state.auth} handleLogout={this.handleLogout}/>

    <div>
      <Route exact path="/" component={HomePage} />
      {/* <Route exact path="/jobs" component={Job} user={this.state.auth} handleLogout={this.handleLogout}/> */}
      <Route exact path="/jobs" render={ routerParams => <Job {...routerParams} handleLogin={this.handleLogin} updateAuth={this.updateAuth} user={this.state.auth}/> }/>
      <Route exact path="/yourJobs" render={routerParams => <JobApplications {...routerParams} user={this.state.auth}/> } />
      <Route exact path="/newApplicant" component={ApplicantForm} />
      <Route exact path="/newEmployer" component={EmployerForm} />
      <Route exact path="/newJob" render={routerParams => <JobForm {...routerParams} user={this.state.auth}/> }/>
      <Route exact path="/applicantLoginForm" render={ routerParams => <ApplicantLoginForm {...routerParams} handleLogin={this.handleLogin} /> } />
      <Route exact path="/employerLoginForm" render={ routerParams => <EmployerLoginForm {...routerParams} handleLogin={this.handleLogin}/> } />
      <Route exact path="/employerPage" render={ routerParams => < EmployerPage {...routerParams}/>}/>
      <Route exact path="/searchResults"  render={ routerParams => < SearchResults {...routerParams} user={this.state.auth}/>}/>
    </div>
        </header>
      </div>
    );
  }
}

export default App;
