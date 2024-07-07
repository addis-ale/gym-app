import "./Testimonial.css";
import { testimonialsData } from "../../data/testimonialsData";
import lArrow from "../../assets/leftArrow.png";
import rArrow from "../../assets/rightArrow.png";
import { useState } from "react";
export default function Testimonial() {
  const [current, setCurrent] = useState(0);
  function handleForward() {
    setCurrent((current) => current + 1);
    if (current === testimonialsData.length - 1) setCurrent(0);
    //current < 2 &&
  }
  function handleReverse() {
    setCurrent((current) => current - 1);
    if (current === 0) setCurrent(testimonialsData.length - 1);
    // current > 0 &&
  }
  return (
    <div className="testimonial">
      <div className="testimonial-l">
        <span>testimonial</span>
        <div>
          <div className="stroke-text">what they</div>
          <span>say about us</span>
        </div>
        <p>{testimonialsData[current].review}</p>
        <div>
          <span>{testimonialsData[current].name}</span>
          <span> - {testimonialsData[current].status}</span>
        </div>
      </div>
      <div className="testimonial-r">
        <div></div>
        <div></div>
        <img src={testimonialsData[current].image} alt="" />
        <div className="arrows">
          {" "}
          <img src={lArrow} alt="" onClick={handleReverse} />
          <img src={rArrow} alt="" onClick={handleForward} />
        </div>
      </div>
    </div>
  );
}
