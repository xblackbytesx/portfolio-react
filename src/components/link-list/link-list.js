import React from 'react';

const LinkList = (props) => (
  props.linklist.map((list, index) => {

    return (
      <ul>
        <h3>{list.title}</h3>
        <li></li>
      </ul>
    )

    // return (
    //   <div className="footer-links">
    //       <section>
    //           <ul>
    //               <li><h3>Content</h3></li>
    //               <li><a className="scroll-on-page-link" href="#about-me">About Me</a></li>
    //               <li><a className="scroll-on-page-link" href="#my-work">My Work</a></li>
    //               <li><a className="scroll-on-page-link" href="#testimonials">Testimonials</a></li>
    //               <li><a className="scroll-on-page-link" href="#contact">Contact</a></li>
    //           </ul>
    //       </section>
    //       <section>
    //           <ul>
    //               <li><h3>Follow Me</h3></li>
    //               <li><a href="https://www.linkedin.com/in/fabiobier" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
    //               <li><a href="https://plus.google.com/+FabioBierX" target="_blank" rel="noopener noreferrer">Google+</a></li>
    //               <li><a href="https://twitter.com/xblackbytesx" target="_blank" rel="noopener noreferrer">Twitter</a></li>
    //               <li><a href="http://www.last.fm/user/softsaurus" target="_blank" rel="noopener noreferrer">Last.fm</a></li>
    //           </ul>
    //       </section>
    //       <section>
    //           <ul>
    //               <li><h3>Used Software</h3></li>
    //               <li><a className="scroll-on-page-link" href="http://www.ubuntu.com" target="_blank" rel="noopener noreferrer">Ubuntu</a></li>
    //               <li><a className="scroll-on-page-link" href="https://www.jetbrains.com/pycharm" target="_blank" rel="noopener noreferrer">Pycharm</a></li>
    //               <li><a className="scroll-on-page-link" href="http://www.gimp.org" target="_blank" rel="noopener noreferrer">Gimp</a></li>
    //               <li><a className="scroll-on-page-link" href="http://www.inkscape.org" target="_blank" rel="noopener noreferrer">Inkscape</a></li>
    //           </ul>
    //       </section>
    //       <section>
    //           <ul>
    //               <li><h3>Music that inspires</h3></li>
    //               <li><a href="http://www.last.fm/music/Stick+to+Your+Guns" target="_blank" rel="noopener noreferrer">Stick to Your Guns</a></li>
    //               <li><a href="http://www.last.fm/music/Architects" target="_blank" rel="noopener noreferrer">Architects</a></li>
    //               <li><a href="http://www.last.fm/music/La+Dispute" target="_blank" rel="noopener noreferrer">La Dispute</a></li>
    //               <li><a href="http://www.last.fm/music/Down+to+Nothing" target="_blank" rel="noopener noreferrer">Down to Nothing</a></li>
    //           </ul>
    //       </section>
    //   </div>
    // )
  })
)

export default LinkList;
