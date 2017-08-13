/**
 * Created by Ashwin on 13/08/17.
 */

import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
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

const pdfMake  = require('pdfmake');


class Address extends Component {
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

