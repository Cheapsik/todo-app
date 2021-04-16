import "./Item.scss";
import { MdDeleteForever } from "react-icons/md";

const Item = () => {
  return (
    <>
      <li>
        Make sandwich!
        <button>
          <MdDeleteForever />
        </button>
      </li>
    </>
  );
};

export default Item;