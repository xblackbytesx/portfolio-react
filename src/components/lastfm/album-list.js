import React from 'react';
import './album-list.css';

const AlbumList = (props) => (
  <ul className="lastfm-album--list">
  {
    props.props.data.map((album, index) => {
        return (
          <li className='lastfm-album' key={index}>
            <figure className="lastfm-album__cover">
              <img src={album.image[3]['#text']} alt={album.name} />
            </figure>

            <div className='lastfm-album__content'>
              <h2 className='lastfm-album__title' title={album.name}> {album.name}</h2>
              <span className='lastfm-album__artist'>{album.artist.name}</span>
              <span className='lastfm-album__scrobble-date'>
                {album.playcount}
              </span>
            </div>
          </li>
        )
    })
  }
  </ul>
)

export default AlbumList;
