import React from "react";

const BlockText = (props) => {
  return (
    <div className="block"
    >
      <div className="block-text">
        Welcome
      </div>
      {props.children}
    </div>
  );
};

export default BlockText;
