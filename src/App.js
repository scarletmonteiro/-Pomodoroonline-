import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            setIsActive(false);
            alert("Pomodoro concluído!");
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(25);
    setSeconds(0);
  };

  return (
    <div className="App">
      <div className="timer">
        <span>{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
      </div>
      <div className="controls">
        <button className="btn btn-success" onClick={toggleTimer}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="btn btn-danger" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
