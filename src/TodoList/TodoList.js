import React from 'react';
import generateId from 'uniqid';
import './TodoList.scss';
import AppHeader from '../AppHeader';
import ItemList from '../ItemList';
class TodoList extends React.Component {
  state = {
    value: '',
    list: [],
  };

  handleinputOnChange = e => {
    this.setState({
      value: e.target.value.trimLeft(),
    });
  };

  handleAddTask = () => {
    const { value, list } = this.state;
    const taskList = [...list];
    const insertedItem = {
      value: value.charAt(0).toUpperCase() + value.slice(1),
      id: generateId(),
      isDone: false,
    };

    taskList.push(insertedItem);
    this.setState({
      list: taskList,
      value: '',
    });
  };

  handleDoneTask = id => {
    const { list } = this.state;
    const updatedList = list.map(listItem => {
      const isSearchedListItem = listItem.id === id;
      return isSearchedListItem
        ? {
            ...listItem,
            isDone: true,
          }
        : listItem;
    });

    this.setState({
      list: updatedList,
    });
  };

  handleDeleteTask = id => {
    const listFiltered = this.state.list.filter(listItem => listItem.id !== id);
    this.setState({
      list: listFiltered,
    });
  };

  componentDidUpdate() {
    localStorage.setItem('dataStore', JSON.stringify(this.state.list));
  }

  componentDidMount() {
    const dataStore = JSON.parse(localStorage.getItem('dataStore'));
    if (dataStore !== null) {
      this.setState({
        list: dataStore,
      });
    }
  }

  render() {
    return (
      <div className='todo-wrapper'>
        <AppHeader
          inputValue={this.state.value}
          inputOnChange={this.handleinputOnChange}
          addTask={this.state.value ? this.handleAddTask : null}
        />
        <ItemList
          taskList={this.state.list}
          deleteTask={this.handleDeleteTask}
          doneTask={this.handleDoneTask}
        />
      </div>
    );
  }
}

export default TodoList;