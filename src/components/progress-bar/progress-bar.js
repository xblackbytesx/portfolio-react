import React from 'react';
import './progress-bar.css';

const ProgressBar = (props) => (
  <span className="bar-wrapper">
    <h3>{props.children}</h3>
    <progress className={`bar ${props.className}`} value={props.value} max="100" />
  </span>
)

export default ProgressBar;
