import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/grid.css';
import Todo from './Todo';
import New from './New';

class Grid extends Component {
	constructor(props) {
		super(props);
		this.values = {};
	}
	
  render() {
		return (
			<div className="grid">
				{this.todo()}
				<New ref={"input"} create={this.create.bind(this)} remove={this.remove.bind(this)} />
	  	</div>
		);
  }
  
  componentWillReceiveProps(props) {
  	const self = this;
  	
  	this.props.lists.forEach(function(todo) {
      const reference = self.refs[todo.id];
      const node = ReactDOM.findDOMNode(reference);
      const box = node.getBoundingClientRect();
			
			self.values[todo.id] = box;
    });
  }
  
  componentDidUpdate(props) {
  	const self = this;
  	const condition = this.props.lists.length == props.lists.length;
    
    props.lists.forEach(function(todo) {
      const reference = self.refs[todo.id];
      const node = ReactDOM.findDOMNode(reference);
      
      if (node == null) { return }
      
	    const newBox = node.getBoundingClientRect();
	    const oldBox = self.values[todo.id];
	    const delta = oldBox.top - newBox.top;
	    
			self.animate(node, delta, condition);
  	});
  	
  	if (!condition) {
      const node = ReactDOM.findDOMNode(this.refs.input);
      const modification = this.props.lists.length < props.lists.length ? 1 : -1;
      
  		this.animate(node, 61 * modification, false);
  	}
  }
  
  animate(node, delta, condition) {
		node.style.transform = 'translate(0px, ' + delta + 'px)';
    node.style.transition = 'transform 0s';
      
  	setTimeout(function() {
			requestAnimationFrame(function() {
      	node.style.transform  = '';
      	node.style.transition = 'transform 0.4s ease';
    	});
		}, condition ? 400 : 0);
  } 
  
  todo() {
  	return this.props.lists.map((todo) => {
			return (
				<Todo ref={todo.id} todo={todo} update={this.update.bind(this)} remove={this.remove.bind(this)} />
			);
		});
  }
  
  update() {
		this.props.update();
  }
  
  create(title) {
		this.props.create(title);
  }
  
  remove(title) {
		this.props.remove(title);
  }
}

export default Grid
