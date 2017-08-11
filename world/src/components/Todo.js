import React, { Component } from 'react';
import '../styles/todo.css';

class Todo extends Component {
  render() {
  	const name = this.props.todo.completed ? "todo-completed" : "";
  	
    return (
      <div className="todo">
      	<p>{this.props.todo.title}</p>
      	<div className={name}></div>
      </div>
    );
  }  
}

export default Todo
