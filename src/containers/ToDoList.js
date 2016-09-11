import React from 'react';
import ToDoList from '../components/ToDoList';
import { itemAdded, itemDeleted, clearList }  from '../actions/ToDoActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state) => {
  return { data: state.todo }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({itemAdded, itemDeleted, clearList}, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);
