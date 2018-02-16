import React from 'react';
import './mini-card.css';

const MiniCard = (props) => {

  return (
    <div className="mini-card">
      <div className="mini-card__wrapper">
      <div className="mini-card__title">{props.title}</div>
        <figure className="mini-card__image">
          <img src={`${props.image}`} alt="Portfolio entry" />
        </figure>
        <div className="mini-card__content">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default MiniCard;
