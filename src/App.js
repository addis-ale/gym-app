import Hero from "./components/Heros/Hero";
import Program from "./components/program/Program";
import Reason from "./components/Reasons/Reason";
import Plan from "./components/Plans/Plan";
import Testimonial from "./components/Testimonial/Testimonial";

import "./App.css";
export default function App() {
  return (
    <div className="App">
      <Hero />
      <Program />
      <Reason />
      <Plan />
      <Testimonial />
    </div>
  );
}
