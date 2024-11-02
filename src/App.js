
import './App.css';

import React, { Component } from 'react'
import NavBaar from './components/NavBaar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBaar/>
        <News/>
      </div>
    )
  }
}

