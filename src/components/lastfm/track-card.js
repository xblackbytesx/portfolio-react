import React from 'react';
import TrackInfo from './track-info.js';
import TrackCover from './track-cover.js';

const TrackCard = (props) => (
  <div className='lastfm-track'>
    <TrackCover cover={props.cover} />
    <TrackInfo artist={props.artist} title={props.title} date={props.date}/>
  </div>
)

export default TrackCard;
