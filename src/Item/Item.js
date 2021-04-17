import React, { useState } from "react";
import "./Item.scss";
import { MdDeleteForever as RemoveItem, MdDone as Done } from "react-icons/md";

const Item = ({ item, handleDeleteTask, id }) => {
  let [done, setDone] = useState(false);

  const handleDoneTask = () => {
    if (!done) setDone((done = true));
  };

  const handleDelTask = () => {
    handleDeleteTask(item, id);
  };

  return (
    <>
      <li style={{ textDecoration: done ? "line-through" : "none" }}>
        {item}
        <div className="icon-container">
          <button
            style={{ display: done ? "none" : "block" }}
            onClick={handleDoneTask}
          >
            <Done />
          </button>
          <button onClick={handleDelTask}>
            <RemoveItem />
          </button>
        </div>
      </li>
    </>
  );
};

export default Item;
