import React from 'react';
import '../styles/style.css';

function Header() {
  return (
    <div class="header">
      <div class="text-center text-white">
        <br />
        <h1>Hello! I'm Kelsey Eckelberry.</h1>
        <img
          class="profilepic"
          src="../public/images/IMG_0334_sm.jpg"
          alt="Kelsey Eckelberry"
        />
        <h4>Full Stack Web Developer</h4>
        <br />
        <div class="social">
          <a href="https://github.com/kelseyeckelberry">
            <i class="fa fa-github fa-2x"></i>
          </a>
          <a href="https://www.linkedin.com/in/kelsey-eckelberry-a97498b2/">
            <i class="fa fa-linkedin fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
