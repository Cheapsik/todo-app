import React from "react";
import "./TodoList.scss";
import AppHeader from "../AppHeader";
import ItemList from "../ItemList";
class TodoList extends React.Component {
  state = {
    value: "",
    list: [],
  };

  handleinputOnChange = (e) => {
    this.setState({
      value: e.target.value.trimLeft(),
    });
  };
  handleAddTask = () => {
    const { value, list } = this.state;
    const taskList = [...list];
    const upperCased = value.charAt(0).toUpperCase() + value.slice(1);
    taskList.push(upperCased);
    this.setState({
      list: taskList,
      value: "",
    });
  };
  handleDeleteTask = (itemToDelete, id) => {
    const listFiltered = this.state.list.filter(
      (listItem, index) => index !== id,
    );
    this.setState({
      list: listFiltered,
    });
  };

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
          handleDeleteTask={this.handleDeleteTask}
        />
      </div>
    );
  }
}

export default TodoList;
