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
          <p>Goals</p>
        </div>
        <Grid lists={this.reorder()} update={this.update.bind(this)} create={this.create.bind(this)} remove={this.remove.bind(this)} />
      </div>
    );
  }
  
  reorder() {
    return this.lists.sort(function(first, second) {
      return first.completed === second.completed ? 0 : first.completed ? 1 : -1;
    }).concat([]);
  }
  
  update() {
    this.setState(this.lists);
  }
  
  create(title) {
    var id = 0;
    
    this.lists.map(function(todo) {
      if (todo.id >= id) {
        id = todo.id + 1;
      }
    });
    
    this.lists[this.lists.length] = {
      "title" : title,
      "id" : id,
      "completed" : false
    };
    
    this.setState(this.lists);
  }
  
  remove(title) {
    var place = 0;
    this.lists.map(function(todo, index) {
      if (todo.id === title) {
        place = index;
        return;
      }
    });
    
    this.lists.splice(place, 1);
    this.setState(this.lists);
  }
}

export default App;
