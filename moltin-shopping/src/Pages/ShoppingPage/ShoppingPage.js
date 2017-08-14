/**
 * Created by Ashwin on 13/08/17.
 */
import React, { Component } from 'react';
import './ShoppingPage.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom';
import { gateway as MoltinGateway } from '@moltin/sdk';

import Shopping from './Shopping/Shopping';
import Cart from './Cart/Cart';
import Address from './Address/Address';
import PaymentGate from './PaymentGate/PaymentGate';


class ShoppingPage extends Component {

  constructor(props, context) {
    super(props, context);
    const Moltin = MoltinGateway({
      client_id: '7awGlmFlyR5ARvBRJFswkDR1odhVvcFATgJjn1mLmL',
    });
    this.state = {
      moltin: Moltin,
    };
  }


  render() {
    return (
      <div>
        <Router>
          <div>
            <div className="navigation-bar">
              <span className="navigation-bar-tile"> <NavLink
                to="/"
                activeClassName="selected"
              >Shop</NavLink></span>
              <span
                className="navigation-bar-tile"
              > <NavLink
                to="/cart"
                activeClassName="selected"
              >Cart</NavLink></span>
            </div>
            <Switch>
              <Route path="/" exact component={(match) => {
                return <Shopping
                  match={match}
                  moltin={this.state.moltin}/>;
              }}/>
              <Route path="/cart" component={(match) => {
                return <Cart
                  match={match}
                  moltin={this.state.moltin}/>;
              }}/>
              <Route path="/address"
                     component={(match) => {
                       return <Address
                         match={match}
                         moltin={this.state.moltin}/>;
                     }}/>
              <Route path="/payment-gateway/:id"
                     component={(match) => {
                       return <PaymentGate
                         match={match}
                         moltin={this.state.moltin}/>;
                     }}/>
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

