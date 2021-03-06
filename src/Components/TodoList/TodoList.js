import React from "react";
import generateId from "uniqid";
import "./TodoList.scss";
import AppHeader from "../AppHeader";
import ItemList from "../ItemList";
import Footer from "../Footer";
class TodoList extends React.Component {
  state = {
    value: "",
    list: [],
  };

  //Input

  handleinputOnChange = (e) => {
    this.setState({
      value: e.target.value.trimLeft(),
    });
  };

  //Tasks

  handleAddTask = () => {
    const { value, list, showOnlyDone } = this.state;
    const taskList = [...list];
    const insertedItem = {
      value: value.charAt(0).toUpperCase() + value.slice(1),
      id: generateId(),
      isDone: false,
      displayItem: showOnlyDone ? false : true,
    };

    taskList.push(insertedItem);
    this.setState({
      list: taskList,
      value: "",
    });
  };

  handleDoneTask = (id) => {
    const { list } = this.state;
    const updatedList = list.map((listItem) => {
      const isSearchedListItem = listItem.id === id;

      return isSearchedListItem
        ? {
            ...listItem,
            isDone: true,
            displayItem: true,
          }
        : listItem;
    });

    this.setState({
      list: updatedList,
    });
  };

  handleDeleteTask = (id) => {
    const listFiltered = this.state.list.filter(
      (listItem) => listItem.id !== id,
    );
    this.setState({
      list: listFiltered,
    });
  };

  //Footer

  handleShowAll = () => {
    const { list } = this.state;
    const updatedList = list.map((listItem) => ({
      ...listItem,
      displayItem: true,
    }));

    this.setState({
      list: updatedList,
    });
  };

  handleShowDone = () => {
    const { list } = this.state;
    const updatedList = list.map((listItem) => ({
      ...listItem,
      displayItem: listItem.isDone,
    }));

    this.setState({
      list: updatedList,
      showOnlyDone: true,
    });
  };

  handleClearTasks = () => {
    this.setState({
      value: "",
      list: [],
    });
  };

  componentDidUpdate() {
    localStorage.setItem("dataStore", JSON.stringify(this.state.list));
  }

  componentDidMount() {
    const dataStore = JSON.parse(localStorage.getItem("dataStore"));
    if (dataStore !== null) {
      this.setState({
        list: dataStore,
      });
    }
  }

  render() {
    return (
      <div className="todo-wrapper">
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
        <Footer
          showAll={this.handleShowAll}
          showDone={this.handleShowDone}
          clearTasks={this.handleClearTasks}
          taskList={this.state.list}
        />
      </div>
    );
  }
}

export default TodoList;
