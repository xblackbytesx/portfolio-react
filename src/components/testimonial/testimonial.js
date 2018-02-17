import React from 'react';

const Testimonial = (props) => {
  return(
    <section className="testimonial">
      <h1>{props.name}</h1>
      <small>{props.title}, {props.company}</small>
      <article>
        <p>{props.content}</p>
      </article>
    </section>
  )
}

export default Testimonial;
