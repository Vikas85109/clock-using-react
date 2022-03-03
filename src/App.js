import React, { useState } from 'react';


const App=()=>{
let time=new Date().toLocaleTimeString();

const[newTime,setTime]=useState(time)

let UpdateTime=()=>{

  time=new Date().toLocaleTimeString();
  setTime(time)
}



  return(
    <>
    <div className="main">
      <h1>{newTime}</h1>
      <button onClick={UpdateTime}>Get Time</button>
    </div>
    </>
  )
}

export default App;