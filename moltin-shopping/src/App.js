import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import './App.css';
import Login from './Pages/Login/Login';
import ShoppingPage from './Pages/ShoppingPage/ShoppingPage';

const NoMatch = ({ location }) => (
  <div>
    <h3>Page Not found <code>{location.pathname}</code></h3>
  </div>
);

class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      isUser: false,
    };
    this.isNotLoggedIn = this.isNotLoggedIn.bind(this);
  }

  isNotLoggedIn(nextState, replace) {
    const user = localStorage.getItem('user');
    return !user;
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" render={() => (
              this.isNotLoggedIn() ? (
                <Redirect to="/login"/>
              ) : (
                <ShoppingPage />
              )
            )}/>
            <Route path="/login" component={Login}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
