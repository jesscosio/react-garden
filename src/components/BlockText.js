import React from "react";

const BlockText = (props) => {
  
  return (
    <div className="block mb-2" >
      <div className={props.styles}>
        {props.text}
      </div>
      {props.children}
    </div>
  );
};

export default BlockText;
