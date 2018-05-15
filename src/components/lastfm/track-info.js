import React from 'react';

const TrackInfo = (props) => (
  <div className='lastfm-track__content'>
    <span className='lastfm-track__title' title={props.title}> {props.title}</span>
    <span className='lastfm-track__artist'>by {props.artist}</span>
    <span className='lastfm-track__scrobble-date'>{props.date}</span>
  </div>
)

export default TrackInfo;
