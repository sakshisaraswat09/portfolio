import React from "react";
import "./skills.css";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Development</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="fa-solid fa-circle-check"></i>
            <div>
              <h3 className="skills__name">Node Js</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="fa-solid fa-circle-check"></i>
            <div>
              <h3 className="skills__name">Python</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="fa-solid fa-circle-check"></i>
            <div>
              <h3 className="skills__name">MySQL</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="fa-solid fa-circle-check"></i>
            <div>
              <h3 className="skills__name">Express.js</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="fa-solid fa-circle-check"></i>
            <div>
              <h3 className="skills__name">MongoDB</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
