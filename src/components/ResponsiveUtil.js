import React, { useRef, useState, useEffect } from "react";

const ResponsiveUtil = () => {
  const [viewWidth, setViewWidth] = useState(window.innerWidth);
  const AppRef = useRef();
  
  useEffect(()=>{
      const updateWindowDimensions = () => {setViewWidth(window.innerWidth);console.log("resizing...");};
      
      window.addEventListener("resize", updateWindowDimensions);
      updateWindowDimensions();

      return () => window.removeEventListener("resize", updateWindowDimensions) 
  }, [AppRef]);

  return (<div></div>);
};

export default ResponsiveUtil;