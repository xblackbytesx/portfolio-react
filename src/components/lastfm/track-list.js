import React from 'react';
import TrackInfo from './track-info.js';
import TrackCover from './track-cover.js';
import './track-list.css';

const TrackList = (props) => (
  <ul className="lastfm-track--list">
  {
    props.props.data.map((track, index) => {
      if(index > 0) {
        return (
          <li className='lastfm-track'>
            <TrackCover cover={track.image[2]['#text']} />
            <TrackInfo
              artist={track.artist['#text']}
              title={track.name}
              date={track.date}
              key={index}
            />
          </li>
        )
      }
    })
  }
  </ul>
)

export default TrackList;
