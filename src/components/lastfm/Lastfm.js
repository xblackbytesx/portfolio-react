import React from 'react';
import TrackCard from './track-card.js';
import TrackList from './track-list.js';
import './lastfm.css';

class LastFm extends React.Component {

  constructor(props) {
    super(props)

    let _username = this.props.username;
    let _apiKey = this.props.apiKey;
    let _limit = this.props.tracks;

    this.url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${_username}&api_key=${_apiKey}&limit=${_limit}&format=json`;

    this.state = {
      data: []
    };

  }

  componentDidMount() {
    console.log("cdm");
    let localLast = this;

    fetch(this.url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      }, ).then(function(response) {
        return response.json();
      })
      .then(function(data) {
        localLast.setState({
          data: data.recenttracks.track
        });
        console.log(data);
      })
      .catch(function(err) {
        console.log(err);
      }
    );
  }

  render() {
    if(this.state.data.length > 0) {
      var LatestTrack =
        <TrackCard
          artist={this.state.data[0].artist['#text']}
          title={this.state.data[0].name}
          cover={this.state.data[0].image[3]['#text']}
          date = {this.state.data[0].date}
        />

      var PreviousTracks = this.state.data.map((track, index) => {
          if(index > 0) {
            return (
              <TrackList
                artist={track.artist['#text']}
                title={track.name}
                cover={track.image[2]['#text']}
                date={track.date}
                key={index}
              />
            )
          }
      });
    }

    return (
      <div>
        {LatestTrack}

        <ul>
          {PreviousTracks}
        </ul>
      </div>
    )
  }
}

export default LastFm;
