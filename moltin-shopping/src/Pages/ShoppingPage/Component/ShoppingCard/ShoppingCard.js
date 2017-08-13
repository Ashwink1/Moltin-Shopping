/**
 * Created by Ashwin on 14/08/17.
 */
import React, { Component } from 'react';
import './shopping.css';

export const ShoppingCard = ({ data, addToCart }) => {
  return <div className="item_wrapper">
    <div className="item_name"> Name: {data.name}</div>
    <div className="item_Descrition">description: {data.description}</div>
    <div className="item_Descrition">availability: {data.meta.stock.availability}</div>
    <div className="button" onClick={() => {
      addToCart(data.id);
    }}>Add To Cart
    </div>
  </div>;
};


export const CheckoutCard = ({ data, removeFromCart }) => {
  return <div className="item_wrapper">
    <div className="item_name"> Name: {data.name}</div>
    <div className="item_Descrition">description: {data.description}</div>
    <div className="item_Descrition">Amount: {data.unit_price.amount + " " + data.unit_price.currency}</div>
    <div className="button"onClick={() => {
      removeFromCart(data.id);
    }}>Remove To Cart</div>
  </div>;
};
