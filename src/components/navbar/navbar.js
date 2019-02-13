import React, { Component } from 'react';

// Static assets
import './navbar.css';
import siteLogo from '../../static/img/logo.svg';


class NavBar extends Component {

  state = {
    expanded: false
  }

  toggleState = () => {
    this.state.expanded
      ? this.setState({expanded: false})
      : this.setState({expanded: true})
  }

  render() {
    return(
      <nav className="navbar" role="navigation">
        <div id="navbar__toggle">
          <input type="checkbox" />

          <img src={siteLogo} alt="Fabio Bier branding" />

          <ul id="menu">
            <li><a href="#aboutme">About Me</a></li>
            <li><a href="#aboutme">My Work</a></li>
            <li><a href="#aboutme">Skills</a></li>
            <li><a href="#aboutme">Music</a></li>
            <li><a href="#aboutme">Testimonials</a></li>
            <li><a href="#aboutme">Contact</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar;
