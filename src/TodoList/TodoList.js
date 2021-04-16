import "./TodoList.scss";
import AppHeader from '../AppHeader';
import ItemList from '../ItemList';
const TodoList = () => {
  return( 
  <div className="todo-wrapper">
      <AppHeader />
      <ItemList />
  </div>
  )
};

export default TodoList;