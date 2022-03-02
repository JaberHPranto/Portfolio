import React, { useState } from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { name, email, message } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = () => {
    setIsLoading(true);
    // // sending message to sanity
    // const contact = {
    //   _type: "contact",
    //   name: formData.name,
    //   email: formData.email,
    //   message: formData.message,
    // };

    // client
    //   .create(contact)
    //   .then(() => {
    //     setIsLoading(false);
    //     setIsFormSubmitted(true);
    //   })
    //   .catch((err) => console.log(err));
    setTimeout(() => {
      setIsLoading(false);
      setIsFormSubmitted(true);
    }, 2000);
  };

  return (
    <>
      <h2 className="head-text">
        I'm always up for a <span>chat</span>
      </h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:jabearhossain@iut-dhaka.edu" className="p-text">
            hello@micael.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+880 1622558693" className="p-text">
            +880 1622558693
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your name"
              name="name"
              value={name}
              onChange={handleInputChange}
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              className="p-text"
              placeholder="Your email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <textarea
              type="text"
              className="p-text"
              placeholder="Your message"
              name="message"
              value={message}
              onChange={handleInputChange}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!isLoading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
