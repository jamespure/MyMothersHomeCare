import { FC, useState } from "react";
import { Aside } from "./styles";
import { FaTimes } from "react-icons/fa";
import { NavLinks } from "../../constants";
import { Link } from "react-router-dom";

const Sidebar: FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Aside className={isOpen ? "show-sidebar" : ""}>
      <div className="sidebar-header">
        <span>My Mother's Care Givers</span>
        <button className="close-btn" onClick={() => setIsOpen(!isOpen)}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {NavLinks.map((link) => {
          const { id, url, text } = link;
          return (
            <li key={id}>
              <Link to={url}>{text}</Link>
            </li>
          );
        })}
      </ul>
    </Aside>
  );
};

export default Sidebar;
