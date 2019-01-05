import React from 'react';
import TrackCard from './track-card.js';
import TrackList from './track-list.js';
// import './lastfm.css';

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
    return (
      <div className="lastfm-component">
        <TrackCard props={this.state} />
        <TrackList props={this.state} />
      </div>
    )
  }
}

export default LastFm;
