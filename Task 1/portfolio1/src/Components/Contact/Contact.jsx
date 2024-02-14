import "./Contact.css";
import lk from "../../assets/linkedin.png";
import gt from "../../assets/githubb.png";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("", "", form.current, {
        publicKey: "",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

      form.current.reset();
  };

  return (
    <div id="contact">
      <div id="contact-title">
        <hr className="hr-style" />
        <h1>Contact</h1>
      </div>

      {/* center part */}

      <form ref={form} onSubmit={sendEmail} id="main-center">
        <label>Name</label>
        <input type="text" name="user_name" className="int" />
        <label>Email</label>
        <input type="email" name="user_email" className="int" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" id="receive" />
      </form>

      <div id="social">
        <h3>SOCIAL PROFILES</h3>
        <a href="https://www.linkedin.com/in/arnab-mahato/" target="_blank">
          <img
            src={lk}
            style={{
              width: "40px",
              height: "40px",
              cursor: "pointer",
            }}
          />
        </a>

        <a href="https://github.com/Arnavoo7" target="_blank">
          <img
            src={gt}
            style={{
              width: "40px",
              height: "40px",
              cursor: "pointer",
              marginLeft: "20px",
            }}
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
