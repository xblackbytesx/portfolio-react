import React from 'react';
import './footer.css';

const Footer = (props) => {
  return (
    <footer className="footer" role="contentinfo">
        <h1 className="visuallyhidden">Footer</h1>

        <div className="master-container">
            <div className="main-container">
                <div className="footer-logo">
                    <img src="static/img/logo.svg" alt="Logo image" />
                </div>
                <div className="footer-links">
                    <section>
                        <ul>
                            <li><h3>Content</h3></li>
                            <li><a className="scroll-on-page-link" href="#about-me">About Me</a></li>
                            <li><a className="scroll-on-page-link" href="#my-work">My Work</a></li>
                            <li><a className="scroll-on-page-link" href="#testimonials">Testimonials</a></li>
                            <li><a className="scroll-on-page-link" href="#contact">Contact</a></li>
                        </ul>
                    </section>
                    <section>
                        <ul>
                            <li><h3>Follow Me</h3></li>
                            <li><a href="https://www.linkedin.com/in/fabiobier" target="_blank">LinkedIn</a></li>
                            <li><a href="https://plus.google.com/+FabioBierX" target="_blank">Google+</a></li>
                            <li><a href="https://twitter.com/xblackbytesx" target="_blank">Twitter</a></li>
                            <li><a href="http://www.last.fm/user/softsaurus" target="_blank">Last.fm</a></li>
                        </ul>
                    </section>
                    <section>
                        <ul>
                            <li><h3>Used Software</h3></li>
                            <li><a className="scroll-on-page-link" href="http://www.ubuntu.com" target="_blank">Ubuntu</a></li>
                            <li><a className="scroll-on-page-link" href="https://www.jetbrains.com/pycharm" target="_blank">Pycharm</a></li>
                            <li><a className="scroll-on-page-link" href="http://www.gimp.org" target="_blank">Gimp</a></li>
                            <li><a className="scroll-on-page-link" href="http://www.inkscape.org" target="_blank">Inkscape</a></li>
                        </ul>
                    </section>
                    <section>
                        <ul>
                            <li><h3>Music that inspires</h3></li>
                            <li><a href="http://www.last.fm/music/Stick+to+Your+Guns" target="_blank">Stick to Your Guns</a></li>
                            <li><a href="http://www.last.fm/music/Architects" target="_blank">Architects</a></li>
                            <li><a href="http://www.last.fm/music/La+Dispute" target="_blank">La Dispute</a></li>
                            <li><a href="http://www.last.fm/music/Down+to+Nothing" target="_blank">Down to Nothing</a></li>
                        </ul>
                    </section>
                </div>

                <hr />

                <p>&copy;2017 Fabio Bier.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
