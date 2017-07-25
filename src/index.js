import React, { Component } from "react";
import { render } from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";

const YOUTUBE_API_KEY = "AIzaSyBA47ATtM7zBOL6jgjwDk_ulSZzA4gldKQ";

// Create a new component. This component should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    };

    YTSearch(
      {
        key: YOUTUBE_API_KEY,
        term: "javascript"
      },
      videos => this.setState({ videos })
    );
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's generated HTML and put it on the page (in the DOM)
render(<App />, document.querySelector(".container"));
