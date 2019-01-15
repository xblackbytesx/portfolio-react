import React from 'react';
import TrackVisibility from 'react-on-screen';
import './pane.css';

const PaneStub = ({props, isVisible }) => (
  <section className={`pane ${props.className ? props.className : null} ${isVisible ? 'appeared' : null}`}>
    <div className="pane__title">
      <h1>{props.title}</h1>
    </div>
    { props.image
      ? <figure className="pane__image">
          <img src={props.image} alt={props.image} />
        </figure>
      : null
    }
    <div className="pane__content">
      {props.children}
    </div>
    { props.footerLink
      ? <footer className="pane__footer">
          <a href={props.footerLink}>props.footerLink</a>
        </footer>
      : null
    }
  </section>
)

const Pane = (props) => (
  <TrackVisibility once partialVisibility>
    <PaneStub props={props} />
  </TrackVisibility>
)

export default Pane;
