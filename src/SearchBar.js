import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: ""
  };

  handleChange = e => {
    this.setState({ term: e.target.value });
    this.props.handleSearch(e.target.value);
  };

  render() {
    return (
      <div className="container">
        <form className="searchForm form-group">
          <input
            type="text"
            className="searchBar form-control"
            placeholder="Search"
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
