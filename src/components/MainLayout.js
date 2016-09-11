import React from 'react';
import ToDoList from '../containers/ToDoList';

class MainLayout extends React.Component {
  render() {
    return (
      <ToDoList />
    );
  }
}

MainLayout.propTypes = {
};

export default MainLayout;
