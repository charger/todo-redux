import React from 'react';
import ToDoList from '../containers/ToDoList';
import ToDoCounter from '../containers/ToDoCounter';
import Notifier from '../containers/Notifier';

class MainLayout extends React.Component {
  render() {
    return (
      <div>
        <ToDoList />
        <ToDoCounter />
        <Notifier />
      </div>
    );
  }
}

MainLayout.propTypes = {
};

export default MainLayout;
