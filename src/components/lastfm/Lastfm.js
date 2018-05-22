import React from 'react';
import TrackCard from './track-card.js';
import TrackList from './track-list.js';
import './lastfm.css';

class LastFm extends React.Component {

  constructor(props) {
    super(props)

    let _username = this.props.username,
      _apiKey = this.props.apiKey;

    this.url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${_username}&api_key=${_apiKey}&format=json`;

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

  timeSince(date) {
    if (typeof date !== 'object') {
      date = new Date(date);
    }

    var seconds = Math.floor((new Date() - date) / 1000);
    var intervalType;

    var interval = Math.floor(seconds / 31536000);
    if (interval >= 1) {
      intervalType = 'year';
    } else {
      interval = Math.floor(seconds / 2592000);
      if (interval >= 1) {
        intervalType = 'month';
      } else {
        interval = Math.floor(seconds / 86400);
        if (interval >= 1) {
          intervalType = 'day';
        } else {
          interval = Math.floor(seconds / 3600);
          if (interval >= 1) {
            intervalType = "hour";
          } else {
            interval = Math.floor(seconds / 60);
            if (interval >= 1) {
              intervalType = "minute";
            } else {
              interval = seconds;
              intervalType = "second";
            }
          }
        }
      }
    }

    if (interval > 1 || interval === 0) {
      intervalType += 's';
    }

    return interval + ' ' + intervalType + ' ago';
  }

  render() {
    let lfm = this;

    if(this.state.data.length > 0) {
      var TrackNodesFirst = this.state.data.map(function (track, index) {
        while(index < 1) {
          var date = track.date ? lfm.timeSince(parseInt(track.date.uts, 10) * 1000 ) : 'Now Playing';

          return (
            <TrackCard className="first" artist={track.artist['#text']}
              title={track.name}
              cover={track.image[3]['#text']}
              date = {date}
              key={index}
            />
          );
        }
      });
    }

    if(this.state.data.length > 0) {
      var TrackNodesRest = this.state.data.map(function (track, index) {
        while(index < lfm.props.tracks && index >= 1) {
          var date = track.date ? lfm.timeSince(parseInt(track.date.uts, 10) * 1000 ) : 'Now Playing';

          return (
            <TrackList className="therest" artist={track.artist['#text']}
              title={track.name}
              cover={track.image[3]['#text']}
              date = {date}
              key={index}
            />
          );
        }
      });
    }

    return (
      <div>
        {TrackNodesFirst}
        <ul>
          {TrackNodesRest}
        </ul>
      </div>
    )
  }
}

export default LastFm;
