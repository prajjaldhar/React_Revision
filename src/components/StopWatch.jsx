import React, { useEffect, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    interval = isActive
      ? setInterval(() => setTime((prev) => prev + 10), 10)
      : clearInterval(interval);
    return () => clearInterval(interval);
  }, [isActive]);

  const startStop = () => {
    setIsActive(!isActive);
  };
  const reset = () => {
    setTime(0);
    setIsActive(false);
  };
  return (
    <div>
      <h1>StopWatch</h1>
      <div className="stopwatch">
        <div className="time">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
        </div>
        <div className="buttons">
          <button onClick={startStop}>{isActive ? "Start" : "Stop"}</button>
          <button onClick={reset}>reset</button>
        </div>
      </div>
    </div>
  );
};

export default StopWatch;
