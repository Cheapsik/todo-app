import "./AppHeader.scss";
import { BsArrowRight } from 'react-icons/bs';

const AppHeader = () => {
  return (
    <div className="header">
      <div className="addTask-wrapper">
        <input className="addTask-input" type="text" placeholder='What you want to do...?'></input>
        <button className="addTask-button-submit" type="submit">
            <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

export default AppHeader;
