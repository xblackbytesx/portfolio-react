import React from 'react';
import TrackInfo from './track-info.js';
import TrackCover from './track-cover.js';

const TrackList = (props) => (
  <li className='lastfm-track'>
    <TrackCover cover={props.cover} />
    <TrackInfo artist={props.artist} title={props.title} date={props.date}/>
  </li>
)

export default TrackList;
