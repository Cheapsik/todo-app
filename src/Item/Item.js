import "./Item.scss";
import { MdDeleteForever as RemoveItem } from "react-icons/md";

const Item = ({ item, handleDeleteTask,id }) => {
  const handleButtonClick = () => {
    handleDeleteTask(item,id);
  };

  return (
    <>
      <li>
        {item}
        <button onClick={handleButtonClick}>
          <RemoveItem />
        </button>
      </li>
    </>
  );
};

export default Item;
