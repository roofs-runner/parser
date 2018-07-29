import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import DataList from "./components/DataList"

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Parser</h1>
        </header>
        <br/>
        
        <div><DataList /></div>
      </div>
    );
  }
}

export default App;
