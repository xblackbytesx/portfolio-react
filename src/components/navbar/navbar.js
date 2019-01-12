import React from 'react';

// Static assets
import './navbar.css';
import siteLogo from '../../static/img/logo.svg';

const NavBar = (props) => (
  <div className="navbar">
    <ul>
      <li><a href="#aboutme">About Me</a></li>
      <li><a href="#aboutme">My Work</a></li>
      <li><a href="#aboutme">Skills</a></li>
      <li><img src={siteLogo} alt="Fabio Bier branding" /></li>
      <li><a href="#aboutme">Music</a></li>
      <li><a href="#aboutme">Testimonials</a></li>
      <li><a href="#aboutme">Contact</a></li>
    </ul>
  </div>
)

export default NavBar;
