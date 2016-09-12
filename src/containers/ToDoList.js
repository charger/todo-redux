import React from 'react';
import ToDoList from '../components/ToDoList';
import { addItems, deleteItem, clearList, toggleItem, getItems }  from '../actions/ToDoActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state) => {
  return { data: state.todo }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addItems, deleteItem, clearList, toggleItem, getItems}, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);
