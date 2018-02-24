import React from 'react';
import './pane.css';

const Pane = (props) => {

  return (
    <section className={`pane ${props.className ? props.className : null}`}>
      <div className="pane__title">
        <h1>{props.title}</h1>
      </div>
      { props.image
        ? <figure className="pane__image">
            <img src={props.image} alt="Pane image" />
          </figure>
        : null
      }
      <div className="pane__content">
        {props.children}
      </div>
      { props.footerLink
        ? <footer className="pane__footer">
            <a href="#">props.footerLink</a>
          </footer>
        : null
      }
    </section>
  )
}

export default Pane;
