import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';
import './PaymenGate.css';

const Loader = () => {
  return <div className="loader-wrapper">
    <div className="loader-center"><CircularProgress size={60} thickness={7}/></div>
  </div>;
};

class PaymentGate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loader: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

    this.setState({ loader: true });
    this.props.moltin.Orders.Payment(1, {
      gateway: 'stripe',
      method: 'purchase',
      first_name: 'John',
      last_name: 'Doe',
      number: '4242424242424242',
      month: '02',
      year: '2020',
      verification_value: '123',
    }).then((response) => {
      this.setState({ loader: false });
      alert('done');
    });

    setTimeout(() => {
      alert('Purchase done');
      this.setState({ loader: false });
      this.props.match.history.push('/');
    }, 7000);
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>

            <TextField
              hintText="otp"
              floatingLabelText="otp"
              onChange={(event, newValue) => this.setState({ otp: newValue })}
            />
            <br/>
            <RaisedButton label="Pay now" primary={true} onClick={(event) => this.handleClick(event)}/>
            {this.state.loader && <Loader />}
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

PaymentGate.propTypes = {};
PaymentGate.defaultProps = {};

export default PaymentGate;
