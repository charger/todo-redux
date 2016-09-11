import React from 'react';
import ToDoList from './ToDoList';

class MainLayout extends React.Component {
  render() {
    const items = [
      { id: 1, title: 'Item #1', isDone: false },
      { id: 2, title: 'Item #2', isDone: true },
      { id: 3, title: 'Item #3', isDone: false }
    ];

    return (
      <ToDoList items={items} />
    );
  }
}

MainLayout.propTypes = {
};

export default MainLayout;
