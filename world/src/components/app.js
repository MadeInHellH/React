import React, { Component } from 'react';
import '../styles/app.css';

class App extends Component {
  render() {
    return (
       <div className="app">
        <div className="app-heading">
          <p>Your List</p>
          <div className="app-avatar"></div>
        </div>
      </div>
    );
  }
}

export default App;
