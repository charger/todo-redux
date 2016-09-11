import React from 'react';
import ToDoList from './ToDoList';

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
