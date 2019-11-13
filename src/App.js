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
    console.log('logged in user', user)
    this.setState({
      auth: user
    })
  }

  handleLogout = () => {
    this.setState({
      auth: {}
    })
    localStorage.removeItem('token')
    console.log("HANDLE LOGOUT IT CALLED")
  }
  
  render() {
    console.log("STATE IN APP JS AFTER LOGOUT IS CALLED", this.state)
    return (
      <div className="App">
        <header className="App-header">
          <Navbar user={this.state.auth} handleLogout={this.handleLogout}/>

    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/jobs" component={Job} handleLogout={this.handleLogout}/>
      {/* <Route exact path="/yourJobs" render={routerParams => <JobApplications {...routerParams} /> } /> */}
      <Route exact path="/newApplicant" component={ApplicantForm} />
      <Route exact path="/newEmployer" component={EmployerForm} />
      <Route exact path="/newJob" render={routerParams => <JobForm {...routerParams} user={this.state.auth}/> }/>
      <Route exact path="/applicantLoginForm" render={ routerParams => <ApplicantLoginForm {...routerParams} handleLogin={this.handleLogin} /> } />
      <Route exact path="/employerLoginForm" render={ routerParams => <EmployerLoginForm {...routerParams} handleLogin={this.handleLogin}/> } />
      <Route exact path="/employerPage" render={ routerParams => < EmployerPage {...routerParams}/>}/>
      <Route exact path="/searchResults" render={ routerParams => < SearchResults {...routerParams}/>}/>
    </div>
        </header>
      </div>
    );
  }
}

export default App;
