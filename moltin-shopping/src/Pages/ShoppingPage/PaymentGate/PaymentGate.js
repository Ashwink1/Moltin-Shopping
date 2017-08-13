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
    console.log(" done--->", this.props.moltin.Order);
  /*  this.props.moltin.Order.Payment(order.id, {
      gateway: 'stripe',
      method: 'purchase',
      first_name: 'John',
      last_name: 'Doe',
      number: '4242424242424242',
      month: '02',
      year: '2020',
      verification_value: '123'
    });*/
    this.props.match.history.push('/');
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
