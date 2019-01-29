import React from 'react';

// Static assets
import './video-bg.css';
import videoFallbackImg from '../../static/img/poster.jpg';
import videoWebm from '../../static/video/twinkling-stars.webm';
import videoM4v from '../../static/video/twinkling-stars.m4v';

const VideoBg = (props) => (
  <div className="videobg">
    <video poster={videoFallbackImg} id="bgvid" autoPlay loop>
        <source src={videoWebm} type="video/webm" />
        <source src={videoM4v} type="video/mp4" />
    </video>
  </div>
)

export default VideoBg;
