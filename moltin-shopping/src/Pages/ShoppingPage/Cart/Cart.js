/**
 * Created by Ashwin on 13/08/17.
 */

import React, { Component } from 'react';
import axios from 'axios';
import './cart.css'

import {CheckoutCard} from './../Component/ShoppingCard/ShoppingCard';

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
      console.log(" --->", this.state.itemsInCart);

    });

  }

  removeFromCart(id) {

    var apiBaseUrl = "https://api.moltin.com/v2";

    axios.delete(apiBaseUrl+'/carts/supercart/items/'+id)
      .then(function (response) {
        console.log(response);
        if(response.data.code == 200) {
          console.log("Login successfull");
        } else{
          console.log("Username does not exists");
          alert("Username does not exist");
        }
      })
      .catch(function (error) {
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

