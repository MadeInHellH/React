import React, { Component } from 'react';
import '../styles/grid.css';
import Todo from './Todo';

class Grid extends Component {
  render() {
    return (
      <div className="grid">
	  	<Todo />
	  	<Todo />
		<Todo />
		<Todo />
		<Todo />
		<Todo />
	  </div>
    );
  }  
}

export default Grid