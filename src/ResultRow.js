import React from "react";

const EmojiResult = props => {
  const codePointHex = props.symbol.codePointAt(0).toString(16);
  const src = "//cdn.jsdelivr.net/emojione/assets/png/" + codePointHex + ".png";

  return (
    <li className="result-row list-item" data-clipboard-text={props.symbol}>
      <img width="26" src={src} />
      {props.label}
    </li>
  );
};

export default EmojiResult;
