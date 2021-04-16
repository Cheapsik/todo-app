import "./Item.scss";
import { MdDeleteForever } from "react-icons/md";

const Item = ({ item, handleDeleteTask }) => {
  const handleButtonClick = () => {
    handleDeleteTask(item);
  };

  return (
    <>
      <li>
        {item}
        <button onClick={handleButtonClick}>
          <MdDeleteForever />
        </button>
      </li>
    </>
  );
};

export default Item;
