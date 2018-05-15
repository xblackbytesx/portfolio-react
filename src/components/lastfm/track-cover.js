import React from 'react';

const TrackCover = (props) => (
  <div className='lastfm-track__cover' style={ {backgroundImage: 'url(' + props.cover + ')' }}></div>
)

export default TrackCover;
