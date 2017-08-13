/**
 * Created by Ashwin on 13/08/17.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ShoppingCard = ({ data, addToCart }) => {
  return <div onClick={() => {
    addToCart(data.id);
  }}>{data.name}</div>;
};


class Shopping extends Component {


  constructor(props, context) {
    super(props, context);
    this.state = {
      contents: [],
    };
    this.addToCart = this.addToCart.bind(this);
  }

  componentWillMount() {
    console.log("item --->", this.props.item);
    const { moltin } = this.props;
    moltin.Products.All().then((products) => {
      console.log(products);
      this.setState({
        contents: products.data,
      });
    });
  }

  addToCart(id) {
    this.props.moltin.Cart.AddProduct(id, 1)
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
