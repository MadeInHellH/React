import React, { Component } from 'react';
import '../styles/app.css';
import Grid from './Grid';
import lists from '../data/list.json';

class App extends Component {
  render() {
    return (
       <div className="app">
        <div className="app-heading">
          <p>Your List</p>
          <div className="app-avatar"></div>
        </div>
        <Grid lists={lists}/>
      </div>
    );
  }
}

export default App;
