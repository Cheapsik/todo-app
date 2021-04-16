import Item from "../Item";
import "./ItemList.scss";
const ItemList = ({ taskList,handleDeleteTask }) => {
  return (
    <ul>
      {taskList.map((item, id) => (
        <Item key={id} item={item} handleDeleteTask={handleDeleteTask}/>
      ))}
    </ul>
  );
};

export default ItemList;
