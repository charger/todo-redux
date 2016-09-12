import React from 'react';
import Notifier from '../components/Notifier';
import { clearErrorNotify }  from '../actions/NotifyActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state) => {
  return { errorText: state.notify.errorText }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({onClearError: clearErrorNotify}, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notifier);
