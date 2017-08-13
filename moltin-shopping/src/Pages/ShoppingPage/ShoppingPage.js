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
import Shopping from './Shopping/Shopping';
import Cart from './Cart/Cart';


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
              <Route path="/" exact component={Shopping}/>
              <Route path="/Cart" component={Cart}/>
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

