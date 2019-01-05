// import React from 'react';
// import TrackInfo from './track-info.js';
// import TrackCover from './track-cover.js';
//
// const TrackCard = (props) => {
//   console.log(props);
//   console.log(props.props.data[0]);
//
//   var track = props.props.data[0];
//
//   return (
//     <div className='lastfm-track lastfm-track--card'>
//       <TrackCover cover={track.image[3]['#text']} />
//       <TrackInfo
//         artist={track.artist['#text']}
//         title={track.name}
//         date={track.date}
//       />
//     </div>
//   )
// }
// export default TrackCard;


import React from 'react';
import TrackInfo from './track-info.js';
import TrackCover from './track-cover.js';
// import './track-card.css';

const TrackCard = (props) => (
  <div className="lastfm-track--card">
  {
    props.props.data.map((track, index) => {
      if(index < 1) {
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
  </div>
)

export default TrackCard;
