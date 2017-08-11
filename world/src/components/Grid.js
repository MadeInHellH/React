import React, { Component } from 'react';
import '../styles/grid.css';
import Todo from './Todo';

class Grid extends Component {
  render() {
		return (
			<div className="grid">
				{this.todo()}
	  	</div>
		);
  }
  
  todo() {
  	return this.props.lists.map((todo) => {
			return (
				<Todo todo={todo} />
			);
		});
  }
}

export default Grid
