import React, { useState, useEffect } from "react";

const Progressbar = () => {
  const [filled, setFilled] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (filled < 100) {
        setFilled((prev) => prev + 2);
      }
    }, 30);
    return () => {
      clearInterval(interval);
    };
  }, [filled]);

  return (
    <div>
      <div className="progressbar">
        <div
          style={{
            height: "100%",
            width: `${filled}%`,
            backgroundColor: "#a66cff",
            transition: "width 0.5s",
          }}
        ></div>
        <span className="progressPercent"></span>
      </div>
    </div>
  );
};

export default Progressbar;
