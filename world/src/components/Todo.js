import React, { Component } from 'react';
import '../styles/todo.css';

class Todo extends Component {
  render() {
  	const todo = this.props.todo.completed ? "todo-completed" : "";
  	const title = this.props.todo.completed ? "title-completed" : "";
  	  	
    return (
      <div className="todo">
    	  <div className={todo} onClick={this.pressed.bind()}></div>
      	<p className={title}>{this.props.todo.title}</p>
      </div>
    );
  }
  
  pressed() {
    
  }
}

export default Todo
