import React, { useState, useEffect } from 'react';

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString();

  return (
    <div style={{ fontSize: '48px', fontFamily: 'monospace', textAlign: 'center', marginTop: '20px' }}>
      {formattedTime}
    </div>
  );
}

export default DigitalClock;
