/**
 * Created by Ashwin on 13/08/17.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gateway as MoltinGateway } from '@moltin/sdk';

const ShoppingCard = ({ data, addToCart }) => {
  return <div onClick={() => {
    addToCart(data.id);
  }}>{data.name}</div>;
};


class Shopping extends Component {


  constructor(props, context) {
    super(props, context);
    const Moltin = MoltinGateway({
      client_id: '7awGlmFlyR5ARvBRJFswkDR1odhVvcFATgJjn1mLmL',
    });
    this.state = {
      Moltin: Moltin,
      contents: [],
    };
    this.addToCart = this.addToCart.bind(this);
  }

  componentWillMount() {
    const { Moltin } = this.state;
    Moltin.Products.All().then((products) => {
      console.log(products);
      this.setState({
        contents: products.data,
      });
    });
  }

  addToCart(id) {
    this.state.Moltin.Cart.AddProduct(id, 1)
  }

  render() {
    const { contents } = this.state;
    return (
      <div>
        {
          contents && contents.length ? contents.map((data) => {
              return <div key={data.id}>
                <ShoppingCard data={data}
                              addToCart={this.addToCart}
                />
              </div>;
            },
          ) : <span> Loading ...</span>
        }
      </div>
    );
  }
}

Shopping.propTypes = {};
Shopping.defaultProps = {};

export default Shopping;
