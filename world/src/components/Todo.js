import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/todo.css';

class Todo extends Component {  
  render() {
  	const todo = this.props.todo.completed ? "todo-completed" : "";
  	const title = this.props.todo.completed ? "title-completed" : "";
  	  	
    return (
      <div ref={"element" + this.props.todo.id} className="todo">
    	  <div className={todo} onClick={this.box.bind(this)}></div>
        <input type="text" value={this.props.todo.title} className={title} id={"input" + this.props.todo.id} onChange={this.text.bind(this)} />
      </div>
    );
  }
  
  box() {
    this.props.todo.completed = !this.props.todo.completed;
    this.props.update();
  }
  
  text(event) {    
    this.props.todo.title = event.target.value;
    this.props.update()
  }
}

export default Todo
