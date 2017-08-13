/**
 * Created by Ashwin on 13/08/17.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { gateway as MoltinGateway } from '@moltin/sdk';

class Cart extends Component {
  constructor(props, context) {
    super(props, context);
    const Moltin = MoltinGateway({
      client_id: '7awGlmFlyR5ARvBRJFswkDR1odhVvcFATgJjn1mLmL',
    });
    this.state = {
      itemsInCart: [],
      Moltin:Moltin,
    };
  }

  componentWillMount() {
     this.state.Moltin.Cart.Items().then((item)=>{
       this.setState({itemsInCart:item.data});
    });

  }


  render() {
    const { itemsInCart} = this.state;
    return (
      <div>
        <div> In cart products</div>
        {
          itemsInCart && itemsInCart.length ? itemsInCart.map((item)=>{
                      return <div>{item.name}</div>
            }) : <div>Nothing in CART</div>
        }
      </div>
    );
  }
}

Cart.propTypes = {};
Cart.defaultProps = {};

export default Cart;

