/**
 * Created by Ashwin on 14/08/17.
 */
import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const style = {
  marginLeft: 20,
};

const DividerForm = () => (
  <Paper zDepth={2}>
    <TextField hintText="First name" style={style} underlineShow={false} />
    <Divider />
    <TextField hintText="street" style={style} underlineShow={false} />
    <Divider />
    <TextField hintText="city" style={style} underlineShow={false} />
    <Divider />
    <TextField hintText="pin" style={style} underlineShow={false} />
    <Divider />
  </Paper>
);

export default DividerForm;