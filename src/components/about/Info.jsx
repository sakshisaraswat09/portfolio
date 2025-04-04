import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
      <i class="fa-solid fa-building-columns about__icon"></i>
        <h3 className="about__title">Education</h3>
        <span className="about__subtitle">B.tech(Information Technology)</span>
      </div>

      <div className="about__box">
      <i class="fa-solid fa-diagram-project about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">10+ Projects</span>
      </div>

      <div className="about__box">
      <i class="fa-solid fa-headset about__icon"></i>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">24/7 Online</span>
      </div>
    </div>
  );
};

export default Info;
