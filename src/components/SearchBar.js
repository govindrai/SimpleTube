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
    this.props.updateVideosHandler(event.target.value);
  }

  handleChange(event) {
    this.setState({
      searchTerm: event.target.value
    });
  }

  render() {
    return (
      <div className="search-bar">
        <a href="/">
          <img src="/logo3.png" height="50px" />
        </a>
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
