import Item from "../Item";
import "./ItemList.scss";
const ItemList = ({ taskList, deleteTask, doneTask }) => {
  return (
    <ul>
      {taskList.map((item) => (
        <Item
          key={item.id}
          item={item}
          deleteTask={deleteTask}
          doneTask={doneTask}
        />
      ))}
    </ul>
  );
};

export default ItemList;
