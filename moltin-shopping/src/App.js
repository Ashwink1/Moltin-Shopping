import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import './App.css';
import Login from './Pages/Login/Login';
import ShoppingPage from './Pages/ShoppingPage/ShoppingPage';

const NoMatch = ({ location }) => (
  <div>
    <h3>Page Not found <code>{location.pathname}</code></h3>
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" component={ShoppingPage}/>
            <Route path="/login" component={Login}/>
            <Route component={NoMatch}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
