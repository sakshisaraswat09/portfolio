import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Sakshi</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Portfolio
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/sakshi-saraswat-7497a0253/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; SakshiSaraswat. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
