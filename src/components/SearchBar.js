import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    // this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      searchTerm: ""
    };
  }

  // handleKeyPress(event) {
  //   console.log("InsidehandleKeyPress");
  //   console.log(event);
  //   console.log(event.key);
  //   console.log("ShiftKEY?", event.shiftKey);
  // }

  handleChange(event) {
    // event.persist();
    console.log("inside handle change");
    console.log(event);
    console.log(event.target);
    this.setState({
      searchTerm: event.target.value
    });
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChange} value={this.state.searchTerm} />
        Value of input variable: {this.state.searchTerm}
      </div>
    );
  }
}

export default SearchBar;
