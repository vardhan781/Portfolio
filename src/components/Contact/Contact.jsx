import React from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { assets } from "../../assets/assets";
import { toast } from "react-hot-toast";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_v6410sk",
        "template_a8ni6bm",
        e.target,
        "pqCz261Ss0EpuiGS2"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          toast.error("Failed to send message, please try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <p className="main-title">CONTACT</p>
      <div id="contact" className="contact-container">
        <div className="contact-detail-container">
          <div className="contact-loc">
            <img className="contact-loc-img" src={assets.location} alt="" />
            <a>Ahmedabad, Gujarat</a>
          </div>
          <div className="contact-loc">
            <img className="contact-loc-img" src={assets.phone} alt="" />
            <a>972-531-2744</a>
          </div>
          <div className="contact-loc">
            <img className="contact-loc-img" src={assets.letter} alt="" />
            <a>vardhansinhmandora@gmail.com</a>
          </div>
          <div className="contact-loc">
            <img className="contact-loc-img" src={assets.linkedin} alt="" />
            <a href="https://www.linkedin.com/in/vardhan-mandora-b42212224/">
              vardhan_sinh
            </a>
          </div>
        </div>
        <p className="get-in-touch">Let's get in touch. Send me a message!</p>
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="contact-inputs">
            <input
              type="text"
              name="name"
              placeholder="NAME"
              maxLength={50}
              required
              className="contact-input"
            />
            <input
              type="email"
              name="email"
              placeholder="EMAIL"
              required
              className="contact-input"
            />
            <input
              type="text"
              name="subject"
              placeholder="SUBJECT"
              maxLength={100}
              required
              className="contact-input"
            />
            <input
              name="message"
              placeholder="MESSAGE"
              maxLength={300}
              required
              className="contact-input"
            ></input>
          </div>
          <button type="submit" className="contact-submit">
            Send Message{" "}
            <img className="submit-img" src={assets.paper_plane} alt="" />
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
