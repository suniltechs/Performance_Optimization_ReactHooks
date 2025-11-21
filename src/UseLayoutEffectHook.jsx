import React, { useLayoutEffect, useRef, useState } from "react";

const UseLayoutEffectHook = () => {

  const boxRef = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const boxWidth = boxRef.current.getBoundingClientRect().width;
    setWidth(boxWidth);
  }, []);

  return (
    <div className="ul-container">
      <div
        ref={boxRef}
        className="ul-box"
      ></div>

      <p className="ul-width-text">Box width: {width}px</p>
    </div>
  );
};

export default UseLayoutEffectHook;
