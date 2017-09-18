import React, { Component } from 'react';
import {Navbar} from './components/Nav';
import {People} from './components/People';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="mainApp">
        <Navbar />
        <People />
      </div>
    )
  }
}

export default App;
