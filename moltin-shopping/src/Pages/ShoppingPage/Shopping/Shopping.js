/**
 * Created by Ashwin on 13/08/17.
 */

import React, { Component } from 'react';
import './shopping.css'
import PropTypes from 'prop-types';



const ShoppingCard = ({ data, addToCart }) => {
  console.log(" data--->", data);
  return <div className="item_wrapper" onClick={() => {
    addToCart(data.id);
  }}> <div className="item_name"> Name: {data.name}</div>
     <div className="item_Descrition">description: {data.description}</div>
    <div className="item_Descrition">availability: {data.meta.stock.availability}</div>
    <div className="button">Add To Cart</div>
  </div>;
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
