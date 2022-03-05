import { useEffect, useState } from "react";

const App = () => {
  const [seconds, setSeconds] = useState(60*25);
  const [completed, setCompleted] = useState(0);
  const [isPaused, setPauseStatus] = useState(false);

  let timerId;
  //React also cleans up effects from the previous render before running the effects next time
  useEffect( () => {
    if(!isPaused) {
      timerId = setInterval( () => {
        setSeconds(seconds - 1)
      }, 1000);
    }
    
    return () => {clearInterval(timerId)}
  });

  const markComplete = (e) => {
    // Toggling checkbox is the default action of clicking on checkbox
    e.preventDefault();
    setCompleted(completed + 1);
  }

  const pauseTimer = (e) => {
    setPauseStatus(!isPaused);
  }
  
  return (
    <div>
      <div>
        <h1> Number Pomodoros Completed: {completed}</h1>
      </div>
      
      <div>
        <h1> 
          {`${seconds}: `} 
          
          <label>
            Done
            <input type="checkbox" onClick={markComplete}/>
          </label>

          <label>
            Pause
            <input type="checkbox" checked={isPaused} onChange={pauseTimer}/>
          </label>
        </h1>
        
        
      </div>
    </div>
  )
};


export default App;