import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from './components/Dashboard'
import CreateForm from './components/CreateForm'
import './App.css';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/create" component={CreateForm} />
        </Router>
      </div>
    );
  }
}

export default App;
