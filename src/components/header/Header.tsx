import { FC, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import { NavLinks } from "../../constants/NavLinks";
import { Navbar, HeaderContainer } from "./styles";

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <HeaderContainer>
      <Navbar>
        <div className="left">
          <span>My Mother's Care Givers</span>
        </div>
        <div className="center">
          <ul>
            {NavLinks.map((link) => {
              return (
                <li key={link.id}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="right">
          <button className="toggle-menu" onClick={() => setIsOpen(!isOpen)}>
            <BiMenuAltRight size={"3.8rem"} />
          </button>
        </div>
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;
