import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class FormInput extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  };
  state = {};

  render() {
    return <TextField type="text" {...this.props} style={{ width: '100%' }} />;
  }
}

export default FormInput;
