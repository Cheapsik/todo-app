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
    taskList.push(value);
    this.setState({
      list: taskList,
      value: "",
    });
  };
  handleDeleteTask = (itemToDelete) => {
    const listFiltered = this.state.list.filter(
      (listItem) => listItem !== itemToDelete,
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
