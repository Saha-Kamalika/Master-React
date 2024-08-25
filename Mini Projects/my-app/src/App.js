import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [counter,setCounter]=useState(0);
  return (
    <>
    <br /><br />
    <div style={{ textAlign: "center" }}>
    <button onClick={()=>setCounter((val)=>val-1)}>-</button>
    <h2>{counter}</h2>
    <button onClick={()=>setCounter((val)=>val+1)}>+</button>
    </div>
    </>
  );
}

export default App;
