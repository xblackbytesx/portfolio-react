import React from 'react';
import TrackVisibility from 'react-on-screen';
import './pane.css';

const Pane = (props) => (
  <TrackVisibility once offset={1000}>
    <section className={`pane ${props.className ? props.className : null}${isVisible}`}>
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
  </TrackVisibility>
)

export default Pane;
