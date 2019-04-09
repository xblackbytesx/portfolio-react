import React from 'react';
import './time-marker.css';

const TimeMarker = (props) => (
  <section className="time-marker">
    <div className="time-marker__wrapper">
      { props.children }
    </div>
    <div className="time-marker__wrapper time-marker__wrapper--empty">
      <h1>Invisible</h1>
    </div>
  </section>
)

export default TimeMarker;
