/**
 * Created by Ashwin on 13/08/17.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FlatButton from 'material-ui/FlatButton';

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
    this.onCheckout = this.onCheckout.bind(this);
  }

  onCheckout(){
    this.props.history.push('/address');
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
        <div>
          <div> In cart products</div>
          <div onClick={this.onCheckout}> Click here to Checkout </div>
          {
            itemsInCart && itemsInCart.length ? itemsInCart.map((item)=>{
              return <div key={item.id}>{item.name}</div>
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

