import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import React, { Component } from 'react';

class FormInput extends Component {
  state = {};

  handleChange = e => {
    debounce(() => {
      this.props.onChange(e);
    }, 250);
  };

  render() {
    return (
      <TextField {...this.props} onChange={this.handleChange} value={this.props.value} style={{ width: '100%' }} />
    );
  }
}

FormInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormInput;
