import "./Program.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";
export default function Program() {
  return (
    <div className="programs" id="Programs">
      {/*header */}
      <div className="programs-header">
        <span className="stroke-text">explore our</span>
        <span>programs</span>
        <span className="stroke-text">to shape you</span>
      </div>
      <div className="program-catagories">
        {programsData.map((data) => (
          <Card data={data} />
        ))}
      </div>
    </div>
  );
}
function Card({ data }) {
  return (
    <div className="catagory">
      {data.image}
      <span>{data.heading}</span>
      <span>{data.details}</span>
      <div className="join-now">
        <span>Join Now</span>
        <img src={RightArrow} alt="" />
      </div>
    </div>
  );
}
