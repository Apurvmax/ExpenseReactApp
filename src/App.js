import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
         <Link to="/post"><p>Get Post</p></Link>
      </div>
    );
  }
}

export default App;
