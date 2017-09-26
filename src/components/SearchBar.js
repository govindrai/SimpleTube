import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.state = {
      searchTerm: ""
    };
  }

  handleKeyUp(event) {
    if (event.key === "Enter") {
      this.props.updateVideosHandler(event.target.value);
    }
  }

  handleChange(event) {
    this.setState({
      searchTerm: event.target.value
    });
  }

  render() {
    return (
      <div className="search-bar">
        <img src="/public/logo3.png" height="115px" />
        <input
          placeholder=" search videos"
          onKeyUp={this.handleKeyUp}
          onChange={this.handleChange}
          value={this.state.searchTerm}
        />
      </div>
    );
  }
}

export default SearchBar;
