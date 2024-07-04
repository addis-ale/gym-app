import "./Header.css";
import Logo from "../../assets/logo.png";
export default function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="gym-logo" className="logo" />
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>Why us</li>
        <li>Plans</li>
        <li>Testimonials</li>
      </ul>
    </div>
  );
}
