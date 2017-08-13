import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class PaymentGate extends Component {

  constructor(props){
    super(props);
    this.state={
      username:'',
      password:''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    console.log(" done--->", );
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>

            <TextField
              hintText="otp"
              floatingLabelText="otp"
              onChange = {(event,newValue) => this.setState({otp:newValue})}
            />
            <br/>
            <RaisedButton label="Pay now" primary={true}  onClick={(event) => this.handleClick(event)}/>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

PaymentGate.propTypes = {};
PaymentGate.defaultProps = {};

export default PaymentGate;
