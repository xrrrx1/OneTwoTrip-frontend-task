/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import App from './containers/App';
import store from './store/Store';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const theme = createMuiTheme({
  overrides: {
    MuiSvgIcon: {
      root: {
        cursor: 'pointer',
        color: 'grey',
        '&:hover': {
          color: 'black',
        },
      },
    },
    MuiInput: {
      underline: {
        '&:after': {
          'border-bottom': '2px solid palevioletred',
        },
      },
    },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
