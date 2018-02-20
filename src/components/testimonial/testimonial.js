import React from 'react';
import './testimonial.css';

const Testimonial = (props) => {
  return(
    <section className="testimonial">
      <figure className="testimonial__image">
        <img src={props.image} alt={props.name} />
      </figure>
      <div class="testimonial__content">
        <h1>{props.name}</h1>
        <small>{props.title}, {props.company}</small>
        <article>
          <p>{props.content}</p>
        </article>
      </div>
    </section>
  )
}

export default Testimonial;
