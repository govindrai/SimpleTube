import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      searchTerm: ""
    };
  }

  handleChange(event) {
    this.setState({
      searchTerm: event.target.value
    });
  }

  render() {
    return (
      <div className="search-bar">
        <input onChange={this.handleChange} value={this.state.searchTerm} />
      </div>
    );
  }
}

export default SearchBar;
