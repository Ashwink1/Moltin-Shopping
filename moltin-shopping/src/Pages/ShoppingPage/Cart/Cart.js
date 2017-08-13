/**
 * Created by Ashwin on 13/08/17.
 */

import React, { Component } from 'react';
import './cart.css'

import {CheckoutCard} from './../Component/ShoppingCard/ShoppingCard';

class Cart extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      itemsInCart: [],
    };
    this.onCheckout = this.onCheckout.bind(this);
  }

  onCheckout() {
    this.props.match.history.push('/address');
  }

  componentWillMount() {
    this.props.moltin.Cart.Items().then((item) => {
      this.setState({ itemsInCart: item.data });
      console.log(" --->", this.state.itemsInCart);

    });

  }


  render() {
    const { itemsInCart } = this.state;
    return (
      <div>
        <div>
          <div className="header"> In cart products</div>
          <div className="checkout-button" onClick={this.onCheckout}> Click here to Checkout</div>
          {
            itemsInCart && itemsInCart.length ? itemsInCart.map((item) => {
              return <div key={item.id}><CheckoutCard data={item}/></div>;
            }) : <div>Nothing in CART</div>
          }

        </div>

      </div>


    );
  }
}

Cart.propTypes = {};
Cart.defaultProps = {};

export default Cart;

