import "./Header.css";
import Logo from "../../assets/logo.png";
import menu from "../../assets/bars.png";
import { useState } from "react";
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
          <li>Home</li>
          <li>Program</li>
          <li>Why us</li>
          <li>Plans</li>
          <li>Testimonials</li>
        </ul>
      )}
      {isOpen && <Hamburger />}
    </div>
  );
}
function Hamburger() {
  return (
    <ul className="hamburger">
      <li>Home</li>
      <li>Program</li>
      <li>Why us</li>
      <li>Plans</li>
      <li>Testimonials</li>
    </ul>
  );
}
