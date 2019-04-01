import React from 'react';
import './progress-bar.css';

const ProgressBar = (props) => (
  <span className="bar-wrapper">
    <label for={`${props.className}_progress`}>{props.children}</label>
    <progress id={`${props.className}_progress`} className={`bar ${props.className}`} value={props.value} max="100" />
  </span>
)

export default ProgressBar;
