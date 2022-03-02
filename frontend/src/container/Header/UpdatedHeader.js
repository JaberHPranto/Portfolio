import React from "react";
import { images } from "../../constants";
import "./UpdatedHeader.scss";

function UpdatedHeader() {
  return (
    <>
      <div className="header__container" id="newHome">
        <div className="header__col-1">
          <div className="header__name">
            <h2>👋 Hello, I'm Pranto</h2>
          </div>
          <div className="header__desc">
            I love to build <span>fun</span> and <span>interactive</span> things
            for the web
          </div>
        </div>
        <div className="header__col-3"></div>
        <div className="header__col-2">
          <div className="header__hero-img">
            <img src={images.hero} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdatedHeader;
