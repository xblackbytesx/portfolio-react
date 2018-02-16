import React from 'react';
import './pane.css';

const Pane = (props) => {
  let content = props.props[0];

  return (
    <section className="pane">
      <div className="pane__title">
        <h1>{content.title}</h1>
      </div>
      <figure className="pane__image">
        {content.image
          ? <img src={content.image} alt="Pane image" />
          : null
        }
      </figure>
      <div className="pane__content">
        <article>
          <p>{content.content}</p>
        </article>
      </div>
    </section>
  )
}

export default Pane;
