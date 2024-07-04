import React from "react";
import "./Hero.css";
import Header from "../Headers/Header";
export default function Hero() {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        {/*the-best-ad*/}
        <div className="the-best-ad">
          <div></div>
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
      </div>
      <div className="right-h">right</div>
    </div>
  );
}
