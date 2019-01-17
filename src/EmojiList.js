import React from "react";

import ResultRow from "./ResultRow";

import "./ResultRow.css";

const EmojiList = props => {
  const resultRows = props.results.map(item => {
    return (
      <ResultRow key={item.title} label={item.title} symbol={item.symbol}>
        {item.title}
      </ResultRow>
    );
  });

  return (
    <div className="container">
      <ul className="list-group emoji-list">{resultRows}</ul>
    </div>
  );
};

export default EmojiList;
