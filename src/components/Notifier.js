import React from 'react';
import Snackbar from 'material-ui/Snackbar';

class Notifier extends React.Component {
  render() {
    if (this.props.errorText === null ) return null;
    return (
      <Snackbar
        open={this.props.errorText !== null}
        message={this.props.errorText}
        action="close"
        onActionTouchTap={this.props.onClearError}
        onRequestClose={reason => false}
      />
    );
  }
}

Notifier.propTypes = {
  errorText: React.PropTypes.string,
  onClearError: React.PropTypes.func.isRequired,
};

export default Notifier;
