import "./Header.css";
import Logo from "../../assets/logo.png";
import menu from "../../assets/bars.png";
import { useState } from "react";
import { Link } from "react-scroll";
export default function Header() {
  const mobile = window.innerWidth <= 768;
  const [isOpen, setIsOpen] = useState(false);
  function handleMenu() {
    console.log(`clicked`);
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div className="header">
      <img src={Logo} alt="gym-logo" className="logo" />
      {mobile ? (
        <div className="menu-icon">
          <img src={menu} alt=" menu" onClick={handleMenu} />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              to="home"
              spy={true}
              smooth={true}
              activeClass="active"
              onClick={handleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="programs" spy={true} smooth={true} onClick={handleMenu}>
              Programs
            </Link>
          </li>
          <li>
            <Link to="reasons" spy={true} smooth={true} onClick={handleMenu}>
              Why Us
            </Link>
          </li>
          <li>
            <Link to="plans" spy={true} smooth={true} onClick={handleMenu}>
              Plans
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              spy={true}
              smooth={true}
              onClick={handleMenu}
            >
              Testinomials
            </Link>
          </li>
        </ul>
      )}
      {isOpen && <Hamburger handleMenu={handleMenu} />}
    </div>
  );
}
function Hamburger({ handleMenu }) {
  return (
    <ul className="hamburger">
      <li>
        <Link
          to="home"
          spy={true}
          smooth={true}
          activeClass="active"
          onClick={handleMenu}
        >
          Home
        </Link>
      </li>
      <li>
        <Link to="programs" spy={true} smooth={true} onClick={handleMenu}>
          Programs
        </Link>
      </li>
      <li>
        <Link to="reasons" spy={true} smooth={true} onClick={handleMenu}>
          Why Us
        </Link>
      </li>
      <li>
        <Link to="plans" spy={true} smooth={true} onClick={handleMenu}>
          Plans
        </Link>
      </li>
      <li>
        <Link to="testimonials" spy={true} smooth={true} onClick={handleMenu}>
          Testinomials
        </Link>
      </li>
    </ul>
  );
}
