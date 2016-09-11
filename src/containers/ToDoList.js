import React from 'react';
import ToDoList from '../components/ToDoList';
import { itemAdded, itemDeleted }  from '../actions/ToDoActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state) => {
  return { data: state.todo }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({itemAdded, itemDeleted}, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);
