import React from "react";
import "./Hero.css";
import Header from "../Headers/Header";
export default function Hero() {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
      </div>
      <div className="right-h">right</div>
    </div>
  );
}
