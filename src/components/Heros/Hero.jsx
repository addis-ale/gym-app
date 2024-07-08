import React from "react";
import "./Hero.css";
import Header from "../Headers/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";

export default function Hero() {
  const transition = { type: `tween`, duration: 3 };
  return (
    <div className="hero">
      <div className="blurr hero-blur"></div>
      <div className="left-h">
        <Header />
        {/*the-best-ad*/}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: "168px" }}
            whileInView={{ left: "8px" }}
            transition={transition}
          ></motion.div>
          <span>the best club in the town</span>
        </div>
        {/* hero-heading*/}
        <div className="hero-txt">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              Ideal body in here we will help you to shape and build your ideal
              body and live up your life to fullest
            </span>
          </div>
        </div>
        {/*figure  */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>Expert coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>
        {/*hero buttons*/}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div
          className="heart-rate"
          initial={{ right: `-1rem` }}
          whileInView={{ right: `4rem` }}
          transition={{ ...transition, type: `spring` }}
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        {/*hero image */}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          src={hero_image_back}
          alt=""
          className="hero-image-back"
          initial={{ right: `10rem` }}
          whileInView={{ right: `20rem` }}
          transition={transition}
        />
        {/* calories*/}
        <motion.div
          className="calories"
          initial={{ right: `37rem` }}
          whileInView={{ right: `28rem` }}
          transition={transition}
        >
          <img src={Calories} alt="" className="calorie-image" />
          <div>
            <span>Caloriesburned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
