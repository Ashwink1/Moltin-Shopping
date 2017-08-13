/**
 * Created by Ashwin on 13/08/17.
 */

import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import { gateway as MoltinGateway } from '@moltin/sdk';
import PropTypes from 'prop-types';
const docDefinition = {
  content: [
    'pdfmake (since it\'s based on pdfkit) supports JPEG and PNG format',
    'If no width/height/fit is provided, image original size will be used',
    {
      image: 'sampleImage.jpg',
    },
  ]
}
const style = {
  margin: 15,
};

let pdfMake  = require('pdfmake/build/pdfmake.js');
 pdfMake.vfs = pdfMake.fonts = {
   Roboto: {
     normal: 'Roboto-Regular.ttf',
     bold: 'Roboto-Medium.ttf',
     italics: 'Roboto-Italic.ttf',
     bolditalics: 'Roboto-MediumItalic.ttf'
   }
 };

 console.log(" pdfMake--->",pdfMake );




class Address extends Component {

  constructor(props){
    super(props);
    this.state={
      username:'',
      password:''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){

    this.props.moltin.Cart.Checkout({
      customer: {
        name: 'John Doe',
        email: 'john@doe.co'
      },
      billing_address: {
        first_name: 'John',
        last_name: 'Doe',
        line_1: '123 Sunny Street',
        line_2: 'Sunnycreek',
        county: 'California',
        postcode: 'CA94040',
        country: 'US'
      },
      shipping_address: {
        first_name: 'Jon',
        last_name: 'Doe',
        line_1: '123 Sunny Street',
        line_2: 'Sunnycreek',
        county: 'California',
        postcode: 'CA94040',
        country: 'US'
      }
    });
    this.props.match.history.push('/payment-gateway');
   // pdfMake.createPdf(docDefinition).download();

  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar
              title="Checkout "
            />
            <TextField
              hintText="Enter your Username"
              floatingLabelText="Username"
              onChange = {(event,newValue) => this.setState({username:newValue})}
            />
            <br/>
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange = {(event,newValue) => this.setState({password:newValue})}
            />
            <br/>
            <RaisedButton label="Pay now" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

Address.propTypes = {};
Address.defaultProps = {};

export default Address;

