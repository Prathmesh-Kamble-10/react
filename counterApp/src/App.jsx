import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

const increment = ()=>{
  if(count<20)
    return setCount(count+1);
}
const decrement = ()=>{
  if(count>0)
    return setCount(count-1);
}
  return (
    <>
      <div>
        <h1>Counter {count}</h1>
        <h2>counter Web.org</h2>
        <button onClick={increment}>Increment {count}</button>
        <br />
        <br />
        <button onClick={decrement}>Decrement {count}</button>
      </div>
    </>
  )
}

export default App
