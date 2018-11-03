import React, { Component } from 'react';
import { LogInForm } from './components/FormLogIn';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LogInForm />
      </div>
    );
  }
}

export default App;
