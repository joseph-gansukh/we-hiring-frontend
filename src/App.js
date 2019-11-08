import React from 'react';
import './App.css';
import Job from './Job';
import HomePage from './components/HomePage';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomePage />
      </header>
    </div>
  );
}

export default App;
