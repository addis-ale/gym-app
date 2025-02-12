import Hero from "./components/Heros/Hero";
import Program from "./components/program/Program";
import Reason from "./components/Reasons/Reason";
import Plan from "./components/Plans/Plan";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";

import "./App.css";
import JoinUs from "./components/JoinUs/JoinUs";
export default function App() {
  return (
    <div className="App">
      <Hero />
      <Program />
      <Reason />
      <Plan />
      <Testimonial />
      <JoinUs />
      <Footer />
    </div>
  );
}
