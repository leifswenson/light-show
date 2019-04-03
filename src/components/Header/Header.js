import React from "react";

const Header = props => {
  return (
    <div>
      <h1>Light Show</h1>
      <p>Move your mouse to create your own constellation.</p>
      <button onClick={props.onClick}>New Sky</button>
    </div>
  );
};

export default Header;
