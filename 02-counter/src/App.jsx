import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setCounter]=useState(0);

  const addValue = () => { 
    if(counter<10)
      setCounter(counter+1); 
    
  }

  const reduceValue = () => { 
    if(counter>0){
    setCounter(counter-1); 
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Count value: {counter}</h2>
      <button onClick={addValue}>Increment</button>
      <br />
      <button onClick={reduceValue}>Decrement</button>
    </>
  )
}

export default App
