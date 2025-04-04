import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/sakshi-saraswat-7497a0253/"
        className="home__social-icon"
        target="_blank"
      >
        <i class="fa-brands fa-linkedin"></i>
      </a>

      <a
        href="https://leetcode.com/SakshiSaraswat/"
        className="home__social-icon"
        target="_blank"
      >
        <i class="fab fa-leetcode"></i>
        <i class="fa-solid fa-code"></i>
      </a>

      <a
        href="https://github.com/sakshisaraswat09"
        className="home__social-icon"
        target="_blank"
      >
        <i class="fa-brands fa-github"></i>
      </a>
    </div>
  );
};

export default Social;
