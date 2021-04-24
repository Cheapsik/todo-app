import './Footer.scss'

const Footer = () => {
  return (
  <div className="footer">
      <span>Tasks now:</span>
      <div className="filter-task_wrapper">
      <p>All</p>
      <p>Active</p>
      <p>Doned</p>
      </div>
      <p className="clear-tasks">Clear all</p>
      </div>
  );
};

export default Footer;
