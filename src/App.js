import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//noddy components for testing routing
const Home = () => (
    <div>
      Home
    </div>
  )
const Somewhere = () => (
    <div>
      Somewhere
    </div>
  )

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          {/* Testing routing
           Button linking to home component */}
          <Link to="/">
            <button>home</button>
          </Link>
          <Link to="/somewhere">
            <button>somewhere else</button>
          </Link>
          {/* Placeholder for test components */}
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/somewhere" component={Somewhere} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
