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
} from 'react-router-dom'
import Shopping from './Shopping/Shopping';
import Cart from './Cart/Cart';
import Address from './Address/Address';
import PaymentGate from './PaymentGate/PaymentGate';


class ShoppingPage extends Component {

  constructor(props, context) {
    super(props, context);
  }


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
              <Route path="/cart" component={Cart}/>
              <Route path="/address" component={Address}/>
              <Route path="/payment-gateway" component={PaymentGate}/>
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

