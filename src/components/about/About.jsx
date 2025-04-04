import React from "react";
import "./about.css";
import AboutImg from "../../assets/about.png";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About me</h2>
      <span className="section__subtitle">My Introduction</span>
      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />
        <div className="about__data">
          <Info />

          <p className="about__description">
           Hi there! I'm Sakshi Saraswat, a student and aspiring software developer passionate about solving complex problems with creative solutions. I'm currently building my skills in JavaScript, Python, Node.js, React.js, and HTML/CSS to develop clean and efficient code. Check out my portfolio to see how I bring ideas to life through technology!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
