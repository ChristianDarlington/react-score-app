import React, {useState, useEffect} from "react";

const Stopwatch = () => {

  const [isRunning, setIsRunning] = useState(false)
  const [elaspedTime, setElaspedTime] = useState(0)
  

  useEffect(() => {
    let id;
     if (isRunning) {
      id = setInterval(() => setElaspedTime(prevTime => prevTime + 1), 1000)
     }
     return () => {clearInterval(id)}
  },[isRunning ])

  return ( 
     <div className="stopwatch">
      <h2>Stopwatch</h2>
      <span className="stopwatch-time">{elaspedTime}</span>
      <button onClick={() => setIsRunning((prevValue) => !prevValue)}>
        {isRunning ? 'Stop' : 'Start'}
        </button>
      <button onClick={() =>  setElaspedTime(0)}>
        Reset
        </button>
     </div>
   );
}
 
export default Stopwatch;