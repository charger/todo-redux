import React from 'react';
import ToDoList from '../containers/ToDoList';
import ToDoCounter from '../containers/ToDoCounter';

class MainLayout extends React.Component {
  render() {
    return (
      <div>
        <ToDoList />
        <ToDoCounter />
      </div>
    );
  }
}

MainLayout.propTypes = {
};

export default MainLayout;
