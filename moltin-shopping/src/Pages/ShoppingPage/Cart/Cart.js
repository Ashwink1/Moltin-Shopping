/**
 * Created by Ashwin on 13/08/17.
 */

import React, { Component } from 'react';
import axios from 'axios';
import './cart.css';

import { CheckoutCard } from './../Component/ShoppingCard/ShoppingCard';

class Cart extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      itemsInCart: [],
    };
    this.onCheckout = this.onCheckout.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  onCheckout() {
    this.props.match.history.push('/address');
  }

  componentWillMount() {
    this.props.moltin.Cart.Items().then((item) => {
      this.setState({ itemsInCart: item.data });
    });

  }

  removeFromCart(id) {

    const apiBaseUrl = 'https://api.moltin.com/v2';
    axios.defaults.baseURL = apiBaseUrl;
    axios.defaults.headers.common['Authorization'] = 'Bearer: a5a86f35679405acb44e8e2010787a0966acf3ab';
    axios.defaults.headers.post['Content-Type'] = 'application/json';


    axios.delete(apiBaseUrl + '/carts/supercart/items/' + id)
      .then(function(response) {
        if (response.data.code == 200) {
          console.log('Removed item call agiin and get new cart lists');
        } else {
          console.log('some problem');
        }
      })
      .catch(function(error) {
        console.log(error);
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
              return <div key={item.id}><CheckoutCard data={item} removeFromCart={this.removeFromCart}/></div>;
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

