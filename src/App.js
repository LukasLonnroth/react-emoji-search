import React, { Component } from "react";
import Clipboard from "clipboard";

import Header from "./Header";
import EmojiList from "./EmojiList";
import SearchBar from "./SearchBar";

import emojis from "./emojis.json";

import "./App.css";

class App extends Component {
  state = {
    filteredEmojis: emojis.slice(0, 20)
  };

  componentDidMount() {
    new Clipboard(".result-row");
  }

  handleSearch = term => {
    const filteredEmojis = emojis
      .filter(item => {
        if (item.title.includes(term) || item.keywords.includes(term)) {
          return true;
        }
        return false;
      })
      .slice(0, 20);
    this.setState({
      filteredEmojis: term === "" ? emojis.slice(0, 20) : filteredEmojis
    });
  };

  render() {
    return (
      <div className="app">
        <Header />
        <SearchBar handleSearch={this.handleSearch} />
        <EmojiList results={this.state.filteredEmojis} />
      </div>
    );
  }
}

export default App;
