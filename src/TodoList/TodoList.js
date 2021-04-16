import React from "react";
import "./TodoList.scss";
import AppHeader from "../AppHeader";
import ItemList from "../ItemList";
class TodoList extends React.Component {
  state = {
    value: '',
    list: []
  };

  handleinputOnChange = e => {
    this.setState({
      value: e.target.value.trimLeft(),
    })
  }
  handleAddTask = () => {
    const taskList = [...this.state.list];
    taskList.push(this.state.value)
    this.setState({
      list: taskList,
      value: ''
    })
    console.log(taskList)
  }

  render() {
    return (
      <div className="todo-wrapper">
        <AppHeader inputValue={this.state.value} inputOnChange={this.handleinputOnChange} addTask={this.state.value ? this.handleAddTask : null}/>
        <ItemList />
      </div>
    );
  }
}

export default TodoList;
