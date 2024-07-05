import Hero from "./components/Heros/Hero";
import Program from "./components/program/Program";
import Reason from "./components/Reasons/Reason";

import "./App.css";
export default function App() {
  return (
    <div className="App">
      <Hero />
      <Program />
      <Reason />
    </div>
  );
}
