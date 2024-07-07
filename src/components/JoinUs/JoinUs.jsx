import { useRef } from "react";
import "./JoinUs.css";
import emailjs from "emailjs-com";

export default function JoinUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q86vo9p",
        "template_cj00ahc",
        form.current,
        "caadV0HoPvQi2x9he"
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="join-us" id="join-us">
      <div className="join-l">
        <hr />
        <div className="join-header">
          <div>
            <span className="stroke-text">ready to</span> level up
          </div>
          <div>
            your body <span>with us?</span>
          </div>
        </div>
      </div>
      <div className="join-r">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            placeholder="Enter your Email Address here"
            name="user_email"
          />
          <button className="btn">Join now</button>
        </form>
      </div>
    </div>
  );
}
