import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { DebounceInput } from 'react-debounce-input';

class FormInput extends Component {
  state = {};

  render() {
    return <DebounceInput element={TextField} {...this.props} debounceTimeout={300} style={{ width: '100%' }} />;
  }
}

FormInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormInput;
