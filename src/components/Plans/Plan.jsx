import "./Plan.css";
import tick from "../../assets/whiteTick.png";
import { plansData } from "../../data/plansData";
import Arrow from "../../assets/rightArrow.png";
export default function Plan() {
  return (
    <div className="plan">
      <div className="plan-header">
        <span className="stroke-text">ready to start </span>

        <span>your journey </span>

        <span className="stroke-text">now with us</span>
      </div>
      {/**plans card */}
      <div className="plans">
        {plansData.map((data, i) => (
          <Card data={data} key={i} />
        ))}
      </div>
    </div>
  );
}
function Card({ data }) {
  return (
    <div className="card">
      {data.icon}
      <span>{data.name}</span>
      <span>$ {data.price}</span>
      <div className="features">
        {data.features.map((feature, i) => (
          <Feature fea={feature} key={i} />
        ))}
      </div>

      <span className="more">See more benefits -> </span>

      <button className="btn">Join now</button>
    </div>
  );
}
function Feature({ fea }) {
  return (
    <div>
      <img src={tick} alt="" />
      <span>{fea}</span>
    </div>
  );
}
