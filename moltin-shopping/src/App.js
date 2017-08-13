import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
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
    this.requireAuth = this.requireAuth.bind(this);
  }

  requireAuth(nextState, replace) {
    console.log(' here--->',);
    if (!this.state.isUser) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname },
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={ShoppingPage} onEnter={this.requireAuth}/>
            <Route path="/login" component={Login}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
