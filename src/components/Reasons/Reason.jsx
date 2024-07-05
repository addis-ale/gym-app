import "./Reason.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";
export default function Reason() {
  return (
    <div className="reason" id="reasons">
      <div className="left-r">
        <img src={image1} alt="" />

        <img src={image2} alt="" />

        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-r">right</div>
    </div>
  );
}
