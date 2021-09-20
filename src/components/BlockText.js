import React from "react";

const BlockText = props => {
  return (
    <div
      style={{
        textAlign: "center",
        fontWeight: "bolder",
        fontSize: "larger",
        fontFamily: "revert",
        width: "100vw",
        padding: "1.5em",
        backgroundColor: "#f4f0ec",
        color: "grey",
      }}
    >
      <div>Welcome</div>
      <hr />
      {props.children}
    </div>
  );
};

export default BlockText;
