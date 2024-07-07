import "./Reason.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";
import addidas from "../../assets/adidas.png";
import newBalance from "../../assets/nb.png";
export default function Reason() {
  return (
    <div className="reason" id="reasons">
      <div className="left-r">
        <img src={image1} alt="" />

        <img src={image2} alt="" />

        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-r">
        <span>some reasons</span>
        <div className="right-header">
          <span className="stroke-text">why</span> choose us?<span></span>
        </div>
        <div className="why">
          <div>
            <img src={tick} alt="" />
            <span>over 140+ expert coches</span>
          </div>
          <div>
            <img src={tick} alt="" />{" "}
            <span> train smart and faster than before</span>
          </div>
          <div>
            <img src={tick} alt="" /> <span>1 free program for new member</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span> reliable partners</span>
          </div>
        </div>
        <span>our partners</span>
        <div className="partners">
          <img src={nike} alt="" />
          <img src={addidas} alt="" />
          <img src={newBalance} alt="" />
        </div>
      </div>
    </div>
  );
}
