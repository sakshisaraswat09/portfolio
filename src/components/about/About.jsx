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
            Hi there! I'm Sakshi Saraswat, a software developer with a passion
            for turning complex problems into elegant solutions. With expertise
            in JavaScript, Python, Node.js, React.js, and HTML/CSS, I craft code
            that's as robust as it is clean. Dive into my portfolio to see how I
            blend creativity and technology to deliver exceptional digital
            experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
