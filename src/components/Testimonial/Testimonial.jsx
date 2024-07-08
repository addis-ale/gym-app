import "./Testimonial.css";
import { testimonialsData } from "../../data/testimonialsData";
import lArrow from "../../assets/leftArrow.png";
import rArrow from "../../assets/rightArrow.png";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const transition = { type: `tween`, duration: 3 };
  return (
    <div className="testimonial">
      <div className="testimonial-l">
        <span>testimonial</span>
        <div>
          <div className="stroke-text">what they</div>
          <span>say about us</span>
        </div>
        <AnimatePresence mode="wait">
          <motion.p
            key={current}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ ...transition, duration: 2 }}
          >
            {testimonialsData[current].review}
          </motion.p>
        </AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 1, x: -100 }}
          transition={transition}
        >
          <span>{testimonialsData[current].name}</span>
          <span> - {testimonialsData[current].status}</span>
        </motion.div>
      </div>
      <div className="testimonial-r">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.img
          src={testimonialsData[current].image}
          alt=""
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 1, x: -100 }}
          transition={transition}
        />
        <div className="arrows">
          {" "}
          <img src={lArrow} alt="" onClick={handleReverse} />
          <img src={rArrow} alt="" onClick={handleForward} />
        </div>
      </div>
    </div>
  );
}
