import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MainLayout from '../components/MainLayout';
injectTapEventPlugin();

export default class Root extends Component {
  render() {
    const { store } = this.props;

    return (
      <MuiThemeProvider>
        <Provider store={store}>
          <MainLayout />
        </Provider>
      </MuiThemeProvider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
};
