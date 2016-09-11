import React, { Component, PropTypes } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MainLayout from '../components/MainLayout';
injectTapEventPlugin();

export default class Root extends Component {
  render() {
    return (
      <MuiThemeProvider>
          <MainLayout />
      </MuiThemeProvider>
    )
  }
}
