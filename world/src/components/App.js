import React, { Component } from 'react';
import '../styles/app.css';
import Grid from './Grid';
import lists from '../data/list.json';

class App extends Component {
  render() {
    this.reorder();
    return (
       <div className="app">
        <div className="app-heading">
          <p>Today</p>
        </div>
        <Grid lists={this.reorder()}/>
      </div>
    );
  }
  
  reorder() {
    return lists.sort(function(first, second) {
      return first.completed == second.completed ? 0 : first.completed ? 1 : -1;
    });
  }
}

export default App;
