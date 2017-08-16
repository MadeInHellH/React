import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/new.css';

class New extends Component {
  render() {
		return (
			<div className="new">
			  <div></div>
        <input type="text" placeholder="Add a new todo here" ref="input" onKeyPress={this.submit.bind(this)} />
	  	</div>
		);
  }
  
  submit(event) {
    var code = event.keyCode || event.which;
    if (code == "13" && event.target.value != "") {
      const node = ReactDOM.findDOMNode(this.refs.input);
      this.props.create(event.target.value);

      event.target.value = "";
      node.blur();
    }
  }
}

export default New
