import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <div>
      <h2 className="header">
        <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
          alt="cat-pic"
        />
        Emoji search
        <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
          alt="cat-pic"
        />
      </h2>
      <p>Click on an emoji to copy it to your clipboard</p>
    </div>
  );
};

export default Header;
