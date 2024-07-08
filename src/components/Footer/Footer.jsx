import "./Footer.css";
import Git from "../../assets/github.png";
import insta from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";
export default function Footer() {
  return (
    <div className="footer">
      <div className="blurr      footer-blurr"></div>
      <hr />
      <div>
        <img src={Git} alt="" />
        <img src={insta} alt="" />
        <img src={linkedin} alt="" />
      </div>
      <img src={Logo} alt="" />
    </div>
  );
}
