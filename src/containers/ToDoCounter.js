import React from 'react';
import ToDoCounter from '../components/ToDoCounter';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return { count: state.todo.items.filter(i=> !i.isDone).length }
};

export default connect(
  mapStateToProps,
)(ToDoCounter);
