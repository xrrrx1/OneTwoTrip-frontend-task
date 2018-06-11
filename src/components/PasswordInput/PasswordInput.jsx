import { InputAdornment } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { RemoveRedEye } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class PasswordInput extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  };
  state = {
    passwordIsMasked: true,
  };

  togglePasswordMask = () => {
    this.setState(prevState => ({
      passwordIsMasked: !prevState.passwordIsMasked,
    }));
  };

  render() {
    const { passwordIsMasked } = this.state;

    return (
      <TextField
        type={passwordIsMasked ? 'password' : 'text'}
        {...this.props}
        style={{ width: '100%' }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <RemoveRedEye onClick={this.togglePasswordMask} />
            </InputAdornment>
          ),
        }}
      />
    );
  }
}

export default PasswordInput;
