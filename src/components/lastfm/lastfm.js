import React from 'react';
import AlbumList from './album-list.js';
import './lastfm.css';

class LastFm extends React.Component {

  constructor(props) {
    super(props)

    let _username = this.props.username;
    let _period = this.props.period;
    let _apiKey = this.props.apiKey;
    let _limit = this.props.limit;

    this.url = `https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${_username}&period=${_period}&api_key=${_apiKey}&limit=${_limit}&format=json`;

    this.state = {
      data: []
    };

  }

  componentDidMount() {
    // console.log("cdm");
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
          data: data.topalbums.album
        });
        // console.log(data);
      })
      .catch(function(err) {
        // console.log(err);
      }
    );
  }

  render() {
    return (
      <div className="lastfm-component">
        <AlbumList props={this.state} />
      </div>
    )
  }
}

export default LastFm;
