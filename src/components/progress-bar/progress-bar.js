import React from 'react';
import './progress-bar.css';

const ProgressBar = (props) => {
    return (
      <div>
          <span className="bar-wrapper">
              <span className={`bar ${props.className}`} style={{width: props.level + '%'}}></span>
          </span>
          <span className="bar-title">
              <h2>{props.children}</h2>
          </span>
      </div>
    )
}

export default ProgressBar;
