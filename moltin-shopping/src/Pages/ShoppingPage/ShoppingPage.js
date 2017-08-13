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

const Shop = () => (
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
              <li><Link to="/">Shop</Link></li>
              <li><Link to="/cart">Cart</Link></li>
            </ul>
            <Switch>
              <Route path="/" exact component={Shop}/>
              <Route path="/Cart" component={WillMatch}/>
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

