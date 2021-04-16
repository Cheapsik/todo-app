import "./AppHeader.scss";
import { BsArrowRight } from "react-icons/bs";

const AppHeader = ({ inputValue, inputOnChange, addTask }) => {
  return (
    <div className="header">
      <div className="addTask-wrapper">
        <input
          className="addTask-input"
          type="text"
          placeholder="What you want to do...?"
          value={inputValue}
          onChange={inputOnChange}
        />
        <button className="addTask-button-submit" type="submit" onClick={addTask}>
          <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

export default AppHeader;
