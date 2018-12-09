import React from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';

class RadioSet extends React.Component {
  // console.log(`Radio set for ${props.tracks.length} tracks`);
  constructor(props) {
    super(props)
    this.state = {
        morningTracks: props.tracks.slice(0, props.tracks.length / 2),
        eveningTracks: props.tracks.slice(props.tracks.length / 2, props.tracks.length)
    }
  }

  switchLists = (song_id) => {
  
    let newMorningTracks = this.state.morningTracks;
    let newEveningTracks = this.state.eveningTracks;

    const morningSong = newMorningTracks.find(song => song.id === song_id);
    const eveningSong = newEveningTracks.find(song => song.id === song_id);

    if (morningSong !== undefined) {

      newMorningTracks.splice(newMorningTracks.indexOf(morningSong), 1);
      newEveningTracks.unshift(morningSong);
      this.setState({morningTracks: newMorningTracks});
      this.setState({eveningTracks: newEveningTracks});


    } else if (eveningSong !== undefined) {

      newEveningTracks.splice(newEveningTracks.indexOf(eveningSong), 1);
      newMorningTracks.unshift(eveningSong);
      this.setState({morningTracks: newMorningTracks});
      this.setState({eveningTracks: newEveningTracks});

    }

  }


  render () {
    const playlists = this.state;

    return (
      <div className="radio-set">
        <section className="radio-set--playlist-container">
          <Playlist
            side="Morning"
            tracks={playlists.morningTracks}
            markFavoriteCallback={this.props.markFavoriteCallback}
            switchListsCallback={this.switchLists}
          />
          <Playlist
            side="Evening"
            tracks={playlists.eveningTracks}
            markFavoriteCallback={this.props.markFavoriteCallback}
            switchListsCallback={this.switchLists}
          />
        </section>
      </div>
    );
  }
};

export default RadioSet;
