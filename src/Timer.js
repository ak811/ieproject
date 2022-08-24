import { useState, useEffect } from "react";

const MAX_TIME = 20;
const PERIOD = 1000;

export default function Timer(props) {
  const [currentTime, setCurrentTime] = useState(MAX_TIME);
  const { onFinish } = props;

  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
  const color = `rgb(${r}, ${g}, ${b})`;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime((p) => {
        if (p > 0) return p - 1;
        onFinish();
        return MAX_TIME;
      });
    }, PERIOD);

    return () => {
      clearInterval(intervalId);
    };
  }, [onFinish]);

  return (
    <div className="count-down" style={{ color }}>
      {currentTime}
    </div>
  );
}
