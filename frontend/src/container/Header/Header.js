import { motion } from "framer-motion";
import React from "react";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import "./Header.scss";

const Header = () => {
  const scaleVariant = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: { duration: 1, ease: "easeInOut" },
    },
  };
  return (
    <div>
      <div className="app__header app__flex" id="home">
        <motion.div
          whileInView={{ x: [-150, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__header-info"
        >
          <div className="app__header-badge">
            <div className="badge-cmp app_flex">
              <span> 👋</span>
              <div style={{ marginLeft: 20 }}>
                <p className="p-text">Hello, I am</p>
                <h1 className="head-text">Pranto</h1>
              </div>
            </div>

            <div className="tag-cmp app__flex">
              <p className="p-text">Web Developer</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__header-img"
        >
          <img src={images.profile} alt="profile" />
          <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={images.circle}
            alt="profile-circle"
            className="overlay-circle"
          />
        </motion.div>
        <motion.div
          variants={scaleVariant}
          whileInView={scaleVariant.whileInView}
          className="app__header-circles"
        >
          {[images.flutter, images.redux, images.sass].map((circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="circle" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AppWrap(Header, "home");
