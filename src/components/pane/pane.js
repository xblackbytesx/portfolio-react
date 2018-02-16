import React from 'react';
import './pane.css';

const Pane = (props) => {

  return (
    <section className="pane">
      <div className="pane__title">
        <h1>{props.title}</h1>
      </div>
      <figure className="pane__image">
        {props.image
          ? <img src={props.image} alt="Pane image" />
          : null
        }
      </figure>
      <div className="pane__content">
        {props.children}
      </div>
    </section>
  )
}

export default Pane;
