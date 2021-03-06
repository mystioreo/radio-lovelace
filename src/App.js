import React, { Component } from 'react';
import './App.css';

import RadioSet from './components/RadioSet';

import songData from './data/tracks.json';

songData.forEach((song, i) => {
  song.id = i;
  song.favorite = false;
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songData: songData,
    }

  }
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="page-header--title">Radio Lovelace</h1>
        </header>
        <main className="main">
          <RadioSet tracks={this.state.songData} markFavoriteCallback={this.markFavorite}/>
        </main>
      </div>
    );
  }

  markFavorite = (songId) => {
    const newSongData = this.state.songData;
    newSongData[songId].favorite = !newSongData[songId].favorite;
    this.setState({songData: newSongData});
  };

}

export default App;
