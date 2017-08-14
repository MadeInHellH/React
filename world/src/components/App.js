import React, { Component } from 'react';
import '../styles/app.css';
import Grid from './Grid';
import concepts from '../data/list.json';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.lists = concepts;
  }
  
  render() {
    return (
       <div className="app">
        <div className="app-heading">
          <p>Today</p>
        </div>
        <Grid lists={this.reorder()} update={this.update.bind(this)} />
      </div>
    );
  }
  
  reorder() {
    return this.lists.sort(function(first, second) {
      return first.completed === second.completed ? 0 : first.completed ? 1 : -1;
    }).concat([]);
  }
  
  update() {
    const self = this;
    setTimeout(function() {
      self.setState(self.lists);
    }, 200);
  }
}

export default App;
