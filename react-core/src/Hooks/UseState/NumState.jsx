import React from 'react'
import { useState } from 'react'

function StateEx1() {
    const [count, setCount] = useState(0);
    const addValue = () =>{
        console.log("outside call")
        return setCount(count+1);
    }
  return (
    <>
        <h2>{count}</h2>
        <button onClick={addValue} >Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        {/* If we do like onClick={setCount(count-1)} it will rerender continuously and gives error */}
    </>
  )
}

export default StateEx1