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
      <div>
        <button className="button--test" onClick={this.toggleState}>Test</button>
        <nav className={`navbar navbar--${this.state.expanded ? `expanded` : `collapsed`}`}>
          <ul>
            <li><a href="#aboutme">About Me</a></li>
            <li><a href="#aboutme">My Work</a></li>
            <li><a href="#aboutme">Skills</a></li>
            <li><img src={siteLogo} alt="Fabio Bier branding" /></li>
            <li><a href="#aboutme">Music</a></li>
            <li><a href="#aboutme">Testimonials</a></li>
            <li><a href="#aboutme">Contact</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default NavBar;
