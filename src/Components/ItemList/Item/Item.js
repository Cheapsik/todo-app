import "./Item.scss";
import { MdDeleteForever as RemoveItem, MdDone as Done } from "react-icons/md";

const Item = ({ item, deleteTask, doneTask }) => {
  const handleDoneTask = () => {
    doneTask(item.id);
  };

  const handleDeleteTask = () => {
    deleteTask(item.id);
  };

  return (
    item.displayItem && (
      <li style={{ textDecoration: item.isDone ? "line-through" : "none" }}>
        {item.value}
        <div className="icon-container">
          <button
            style={{ display: item.isDone ? "none" : "block" }}
            onClick={handleDoneTask}
          >
            <Done />
          </button>
          <button onClick={handleDeleteTask}>
            <RemoveItem />
          </button>
        </div>
      </li>
    )
  );
};

export default Item;
