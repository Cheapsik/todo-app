import "./Footer.scss";

const Footer = ({ showAll, showDone, clearTasks, taskList }) => {
  const numberOfTasks = taskList.filter((item) => item.displayItem).length;
  return (
    <footer className="footer">
      <p>
        Tasks: <span>{numberOfTasks}</span>
      </p>
      <div className="filter-task_wrapper">
        <button onClick={showAll}>All</button>
        <button onClick={showDone}>Completed</button>
      </div>
      <button className="clear-tasks" onClick={clearTasks}>
        Clear all
      </button>
    </footer>
  );
};

export default Footer;
