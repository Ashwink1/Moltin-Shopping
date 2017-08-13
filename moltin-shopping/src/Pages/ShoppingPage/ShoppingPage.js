/**
 * Created by Ashwin on 13/08/17.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

const Home = () => (
  <p>
    A <code>&lt;Switch></code> renders the
    first child <code>&lt;Route></code> that
    matches. A <code>&lt;Route></code> with
    no <code>path</code> always matches.
  </p>
)

const WillMatch = () => <h3>Matched!</h3>



class ShoppingPage extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/will-match">Will Match</Link></li>
            </ul>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/will-match" component={WillMatch}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

ShoppingPage.propTypes = {};
ShoppingPage.defaultProps = {};

export default ShoppingPage;

