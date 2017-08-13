/**
 * Created by Ashwin on 13/08/17.
 */

import React, { Component } from 'react';
import {ShoppingCard} from './../Component/ShoppingCard/ShoppingCard';



class Shopping extends Component {


  constructor(props, context) {
    super(props, context);
    this.state = {
      contents: [],
    };
    this.addToCart = this.addToCart.bind(this);
  }

  componentWillMount() {
    const { moltin } = this.props;
    moltin.Products.All().then((products) => {
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
