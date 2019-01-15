import React from 'react';
import TimeSince from '../timesince/timesince';

const TrackInfo = (props) => {
  var date =
    props.date
    ? <TimeSince date={parseInt(props.date.uts, 10) * 1000} />
    : 'Now Playing';

  return(
    <div className='lastfm-track__content'>
      <h2 className='lastfm-track__title' title={props.title}> {props.title}</h2>
      <span className='lastfm-track__artist'>by {props.artist}</span>
      <span className='lastfm-track__scrobble-date'>
        {date}
      </span>
    </div>
  )
}

export default TrackInfo;
