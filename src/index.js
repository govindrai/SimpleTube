import React, { Component } from "react";
import { render } from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

const YOUTUBE_API_KEY = "AIzaSyC_LTdisHxCffxKBQkdH6s_LRURT7oZFz4";

// Create a new component. This component should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.updateSelectedVideo = this.updateSelectedVideo.bind(this);
    this.updateVideos = this.updateVideos.bind(this);

    YTSearch(
      {
        key: YOUTUBE_API_KEY,
        term: "javascript"
      },
      videos => this.setState({ videos, selectedVideo: videos[0] })
    );
  }

  updateVideos(term) {
    YTSearch(
      {
        key: YOUTUBE_API_KEY,
        term
      },
      videos => this.setState({ videos })
    );
  }

  updateSelectedVideo(selectedVideo) {
    console.log("made it here");
    this.setState({ selectedVideo });
  }

  render() {
    return (
      <div>
        <SearchBar updateVideosHandler={this.updateVideos} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          updateSelectedVideoHandler={this.updateSelectedVideo}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

// Take this component's generated HTML and put it on the page (in the DOM)
render(<App />, document.querySelector(".container"));
