import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/grid.css';
import Todo from './Todo';

class Grid extends Component {
	constructor(props) {
		super(props);
		this.values = {};
	}
	
  render() {
		return (
			<div className="grid">
				{this.todo()}
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
    
    props.lists.forEach(function(todo) {
      const reference = self.refs[todo.id];
      const node = ReactDOM.findDOMNode(reference);
	    const newBox = node.getBoundingClientRect();
	    const oldBox = self.values[todo.id];
	    const delta = oldBox.top - newBox.top;

			node.style.transform = 'translate(0px, ' + delta + 'px)';
      node.style.transition = 'transform 0s';
	    
	    requestAnimationFrame(function() {
        node.style.transform  = '';
        node.style.transition = 'transform 0.5s ease';
      });
  	});
  }
  
  todo() {
  	return this.props.lists.map((todo) => {
			return (
				<Todo ref={todo.id} todo={todo} update={this.update.bind(this)} />
			);
		});
  }
  
  update() {
		this.props.update();
  }
}

export default Grid
