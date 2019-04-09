import React from 'react';
import './job.css';

const Job = (props) => (
  <div className="job">
    <figure className="job__image">
      <img src={props.image} alt={props.name} />
    </figure>
    <div className="job__content">
      <h1>{props.title}</h1>
      <small>{props.company}</small>
      <article>
        <p>{props.content}</p>
      </article>
    </div>
  </div>
)

export default Job;
