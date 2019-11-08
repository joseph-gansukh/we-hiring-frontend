import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import JobsIndex from './components/JobsIndex';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Job from './Job'
import ApplicantForm from './components/ApplicantForm'
import JobForm from './components/JobForm'

// ReactDOM.render(<App />, document.getElementById('root'));

const routing = (
    <Router>
      <div>
        <Navbar/>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/jobs" component={Job} />
        <Route exact path="/newApplicant" component={ApplicantForm} />
        <Route exact path="/newJob" render={routerParams => 
          <JobForm {...routerParams} /> }/>
        
      </div>
    </Router>
)


ReactDOM.render(routing, document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
