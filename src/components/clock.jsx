import React, { useState, useEffect } from "react";
import moment from "moment";
import Dot from "@/components/dot.jsx";
import "./clock.css";
import { digitPatterns } from "./digital-patterns";

const Clock = () => {
  const [time, setTime] = useState(moment());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const getDigitPattern = (digit) => digitPatterns[digit] || [];

  const getPatterns = (timeString) => {
    return timeString.split('').map(char => char === ':' ? ':' : getDigitPattern(parseInt(char)));
  };

  const timeString = time.format("HH:mm:ss");
  const patterns = getPatterns(timeString);

  return (
    <div className="container h-[80vh] flex items-center justify-center mx-auto max-md:grid max-md:grid-cols-2 max-md:grid-rows-3">
      {patterns.map((pattern, patternIndex) => (
        pattern === ':' ?
          <span key={patternIndex} className="text-5xl font-semibold mx-2 max-md:hidden
          \">:</span>
          :
          <div key={patternIndex} className="clock-grid">
            {pattern.map((row, rowIndex) =>
              row.map((dot, colIndex) => (
                <Dot key={`${rowIndex}-${colIndex}`} active={dot === 1} />
              ))
            )}
          </div>
      ))}
    </div>
  );
};

export default Clock;
