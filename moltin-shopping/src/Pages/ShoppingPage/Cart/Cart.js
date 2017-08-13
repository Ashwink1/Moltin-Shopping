/**
 * Created by Ashwin on 13/08/17.
 */

import React, { Component } from 'react';

class Cart extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      itemsInCart: [],
    };
    this.onCheckout = this.onCheckout.bind(this);
  }

  onCheckout() {
    console.log(" --->", this.props);
    this.props.match.history.push('/address');
  }

  componentWillMount() {
    this.props.moltin.Cart.Items().then((item) => {
      this.setState({ itemsInCart: item.data });
    });

  }


  render() {
    const { itemsInCart } = this.state;
    return (
      <div>
        <div>
          <div> In cart products</div>
          <div onClick={this.onCheckout}> Click here to Checkout</div>
          {
            itemsInCart && itemsInCart.length ? itemsInCart.map((item) => {
              return <div key={item.id}>{item.name}</div>;
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

